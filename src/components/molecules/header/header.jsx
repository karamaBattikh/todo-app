import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../contexts/auth-context";
import Button from "../../atoms/button";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 8px;

  background-color: lightgray;
  font-size: 16px;
  width: 100%;
  ul {
    margin-left: 20px;

    li {
      display: inline-block;
      margin: auto 10px;
    }
    li,
    a {
      color: darkgrey;
    }
  }
`;

const Header = () => {
  const { signout } = useAuth();

  return (
    <HeaderWrapper>
      <h2>Todo List</h2>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/todo-list">Taches</Link>
          </li>
          <li>
            <Link to="/login"> Connexion</Link>
          </li>
          <li>
            <Button color="darkgrey" bgColor="transparent" onClick={signout}>
              Déconnexion
            </Button>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};
export default Header;
