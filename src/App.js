import { BrowserRouter as Router, Switch } from "react-router-dom";
import ResetCss from "./styles/reset-css";
import { switchRoute } from "./utils/routes-list";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ResetCss />
        app
        <Switch>{switchRoute}</Switch>
      </Router>
    </div>
  );
}
