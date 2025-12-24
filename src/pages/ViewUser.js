import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    api.get(`/users/${id}`).then(res => setUser(res.data));
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ViewUser;
