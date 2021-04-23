import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/auth-context";
import Button from "../../atoms/button";
import HeaderWrapper from "./header-wrapper";

const Header = () => {
  const { signout, isAuthenticated } = useAuth();

  return (
    <HeaderWrapper>
      <h2>Todo List</h2>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/todo-list">Tâches</Link>
          </li>
          {!isAuthenticated ? (
            <li>
              <Link to="/login"> Connexion</Link>
            </li>
          ) : (
            <li>
              <Button color="gray" bgColor="transparent" onClick={signout}>
                Déconnexion
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </HeaderWrapper>
  );
};
export default Header;
