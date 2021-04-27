import { BrowserRouter as Router, Switch } from "react-router-dom";
import ResetCss from "./styles/reset-css";
import { switchRoute } from "./utils/routes-list";
import Header from "./components/molecules/header";
import { AuthProvider } from "./contexts/auth-context";
import { TodoProvider } from "./contexts/todo-context";
import { ModalProvider } from "./contexts/modal-context";

export default function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <TodoProvider>
          <Router>
            <ResetCss />
            <Header />
            <Switch>{switchRoute}</Switch>
            <div id="modal-root" />
          </Router>
        </TodoProvider>
      </ModalProvider>
    </AuthProvider>
  );
}
