import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useTodo } from "../../contexts/todo-context";
import EditForm from "../../components/molecules/edit-todo-form";

const EditTodo = () => {
  const { handleFindTodo, handleUpdateTodo } = useTodo();
  const { task } = useParams();

  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: { ...handleFindTodo(task) },
  });

  const history = createBrowserHistory();

  const onSubmit = (values) => {
    handleUpdateTodo(task, { ...values });
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
