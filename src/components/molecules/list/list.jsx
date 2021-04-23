import { useTodo } from "../../../contexts/todo-context";
import { Link } from "react-router-dom";
import Label from "../../atoms/label";
import Button from "../../atoms/button";
import ListWrapper from "./list-wrapper";

const List = () => {
  const { todoList, handleRemoveTodo } = useTodo();
  return (
    <ListWrapper>
      {todoList?.length > 0 ? (
        todoList?.map((item, index) => (
          <div key={`item_${index}`} className="todo__item">
            <div>
              <p>
                <b>{item?.name}</b>
                {":  "}
                {item?.description}
              </p>
              {" - "}
              <Button
                color="blue"
                bgColor="transparent"
                type="button"
                onClick={() => handleRemoveTodo(item.id)}
              >
                Supprimer
              </Button>
              {" - "}
              <Link to={`/todo-list/${item.id}`}>Modifier</Link>
            </div>

            <Label color={item?.status === "not-completed" ? "red" : "green"}>
              {item?.status}
            </Label>
          </div>
        ))
      ) : (
        <p>pas de todo list</p>
      )}
    </ListWrapper>
  );
};

export default List;
