import { Link } from "react-router-dom";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {
  return (
    <div>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}> Home</Logo>
        <span> <Category /></span>
      </Nav>

      <Pages />
    </div>
  );
};

const Nav = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  svg {
    font-size: 2rem;
  }

  span{
    flex-grow:2;
    justify-self:flex-end;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
`;


export default App;
