import { Route } from "react-router-dom";
import PrivateRoute from "./private-route";
import Login from "../page/login";
import TodoList from "../page/todo-list";
import EditTodo from "../page/edit";

export const RoutesList = [
  {
    name: "home",
    pathIsExact: true,
    path: "/home",
    component: () => <div>home</div>,
    isPrivate: false,
  },
  {
    name: "todo-list",
    pathIsExact: true,
    path: "/todo-list",
    component: () => <TodoList />,
    isPrivate: true,
  },
  {
    name: "task",
    pathIsExact: true,
    path: "/todo-list/:task",
    component: () => <EditTodo />,
    isPrivate: true,
  },
  {
    name: "login",
    pathIsExact: true,
    path: "/login",
    component: () => <Login />,
    isPrivate: false,
  },
];

export const switchRoute = RoutesList.map((route) => {
  if (route.isPrivate) {
    return (
      <PrivateRoute
        key={route.name}
        exact={route.pathIsExact}
        path={route.path}
        component={route.component}
      />
    );
  }
  return (
    <Route
      key={route.name}
      exact={route.pathIsExact}
      path={route.path}
      component={route.component}
    />
  );
});
