import { BrowserRouter as Router, Switch } from "react-router-dom";
import ResetCss from "./styles/reset-css";
import { switchRoute } from "./utils/routes-list";
import Header from "./components/molecules/header";

export default function App() {
  return (
    <>
      <Router>
        <ResetCss />
        <Header />
        <Switch>{switchRoute}</Switch>
      </Router>
    </>
  );
}
