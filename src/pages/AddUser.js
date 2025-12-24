import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const AddUser = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/users", user);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Add User</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <br /><br />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <br /><br />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddUser;
