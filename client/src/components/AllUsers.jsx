import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
  Button,
} from "@mui/material";
import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
  border: 1px solid black;
`;
const Thead = styled(TableHead)`
  background: black;
  & > tr > th {
    color: #fff;
    font-size: 20px;
  }
`;

const AllUsers = () => {
  useEffect(() => {
    getAllUsers();
  }, []);

  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    let response = await getUsers();

    setUsers(response.data);
  };

  const navigate = useNavigate();
  const deleteuser = async (id) => {
    let response = await deleteUser(id);
    getAllUsers();
  };
  return (
    <StyledTable>
      <Thead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </Thead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteuser(user._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
