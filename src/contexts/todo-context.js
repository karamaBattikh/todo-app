import { createContext, useState, useContext } from "react";

export const TodoContext = createContext();

const initialValue = [
  {
    id: 0,
    name: "Envoyer un e-mail",
    description: "A toute l'equipe",
    status: "not-completed",
  },
  {
    id: 1,
    name: "Faire l'exercice",
    description: "React only",
    status: "completed",
  },
];

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initialValue);

  const handleAddTodo = (values) => {
    setTodoList([
      ...todoList,
      { ...values, id: todoList.length, status: "not-completed" },
    ]);
  };

  const handleFindTodo = (id) => {
    return { ...todoList.filter((elt) => elt.id === parseInt(id))[0] };
  };

  const handleRemoveTodo = (id) => {
    setTodoList(todoList.filter((elt) => elt.id !== id));
  };

  const handleUpdateTodo = (id, values) => {
    const newTodoList = todoList.map((elt) => {
      if (elt.id === parseInt(id)) {
        return { ...values, id: parseInt(id) };
      } else {
        return elt;
      }
    });
    setTodoList(newTodoList);
  };
  return (
    <TodoContext.Provider
      value={{
        todoList,
        handleFindTodo,
        handleAddTodo,
        handleUpdateTodo,
        handleRemoveTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
