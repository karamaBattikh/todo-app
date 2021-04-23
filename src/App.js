import { BrowserRouter as Router, Switch } from "react-router-dom";
import ResetCss from "./styles/reset-css";
import { switchRoute } from "./utils/routes-list";
import Header from "./components/molecules/header";
import { AuthProvider } from "./contexts/auth-context";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ResetCss />
        <Header />
        <Switch>{switchRoute}</Switch>
      </Router>
    </AuthProvider>
  );
}
