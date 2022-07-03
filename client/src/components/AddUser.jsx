import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { addUser } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5px auto 0 auto;
  & > div {
    margin: 20px;
  }
`;

const AddUser = () => {
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

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onBlur={(e) => {
            updateValue(e);
          }}
          name="name"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onBlur={(e) => {
            updateValue(e);
          }}
          name="username"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onBlur={(e) => {
            updateValue(e);
          }}
          name="email"
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onBlur={(e) => {
            updateValue(e);
          }}
          name="phone"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          onClick={() => {
            addUserDetails();
          }}
        >
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
