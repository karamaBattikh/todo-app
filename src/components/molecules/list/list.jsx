import { useTodo } from "../../../contexts/todo-context";
import { Link } from "react-router-dom";
import Label from "../../atoms/label";
import Button from "../../atoms/button";
import { useModal } from "../../../contexts/modal-context";
import ListWrapper from "./list-wrapper";

const List = () => {
  const { todoList, handleRemoveTodo } = useTodo();
  const { onClose, handleOpen } = useModal();

  const handleClick = (item) => {
    handleOpen({
      text: `Vous êtes sûr de vouloir supprimer Todo: "${item?.name}"`,
      handleClick: () => {
        handleRemoveTodo(item?.id);
        onClose();
      },
    });
  };

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
                onClick={() => handleClick(item)}
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
