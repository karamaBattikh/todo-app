import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTodo } from "../../contexts/todo-context";
import List from "../../components/molecules/list";
import AddTodoForm from "../../components/molecules/add-todo-form";
import TodoListWrapper from "./todo-list-wrapper";

const ListTodo = () => {
  const {
    register,
    handleSubmit,
    errors,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({});

  const { handleAddTodo } = useTodo();

  const onSubmit = (values) => {
    handleAddTodo(values);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({});
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <TodoListWrapper>
      <h1>List des taches</h1>
      <List />
      <hr />
      <AddTodoForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
      />
    </TodoListWrapper>
  );
};

export default ListTodo;
