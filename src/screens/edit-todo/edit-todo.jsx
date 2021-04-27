import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { useTodo } from "../../contexts/todo-context";
import EditForm from "../../components/molecules/edit-todo-form";

const EditTodo = () => {
  const { handleFindTodo, handleUpdateTodo } = useTodo();
  const { task } = useParams();
  const history = useHistory();

  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: { ...handleFindTodo(task) },
  });

  const onSubmit = (values) => {
    handleUpdateTodo(task, { ...values });
    history.push("/todo-list");
  };

  return (
    <EditForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      watch={watch}
    />
  );
};

export default EditTodo;
