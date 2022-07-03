import { AppBar, Toolbar, IconButton, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: black;
`;
const Tab = styled(NavLink)`
  font-size: 20px;
  margin-right: 25px;
  color: inherit;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tab to="/">
          <b>Student Management</b>
        </Tab>
        <Tab to="/all">All Users</Tab>
        <Tab to="/add">Add User</Tab>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
