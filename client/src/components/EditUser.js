import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { editUser, getUser } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5px auto 0 auto;
  & > div {
    margin: 20px;
  }
`;

const EditUser = () => {
  useEffect(() => {
    loadUserData();
  }, []);
  const { id } = useParams();
  const loadUserData = async () => {
    const response = await getUser(id);
    // const data = response.data;
    setUser(response.data);
  };
  const navigate = useNavigate();
  const defaultValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };

  const [user, setUser] = useState(defaultValues);

  const updateValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/all");
  };
  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => {
            updateValue(e);
          }}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => {
            updateValue(e);
          }}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => {
            updateValue(e);
          }}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => {
            updateValue(e);
          }}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          onClick={() => {
            editUserDetails();
          }}
        >
          Update User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
