import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    api.get(`/users/${id}`).then(res => setUser(res.data));
  }, [id]);

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/users/${id}`, user);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Edit User</h2>
      <input name="name" value={user.name} onChange={handleChange} />
      <br /><br />
      <input name="email" value={user.email} onChange={handleChange} />
      <br /><br />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditUser;
