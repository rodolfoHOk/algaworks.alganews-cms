import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return <>
    <List>
      <Item><Link to="/">inicio</Link></Item>
      <Item><Link to="/">artigos</Link></Item>
      <Item><Link to="/">portfólio</Link></Item>
      <Item><Link to="/">storage</Link></Item>
      <Item><Link to="/contato">usuários</Link></Item>
    </List>
  </>
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`;

const Item = styled.li`
  text-transform: lowercase;
  font-size: 18px;

  a {
    text-decoration: none;
    color: #274060;
  }
`;
