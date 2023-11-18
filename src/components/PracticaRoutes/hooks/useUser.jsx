import { useEffect, useState } from "react";
import { axiosClient } from "../axios";
import { useNavigate, useParams } from "react-router-dom";

const useUser = (global = true) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (global) {
      const getUsers = async () => {
        try {
          const { data } = await axiosClient.get("users");
          setError(false);
          setLoading(false);
          setUsers(data);
        } catch (error) {
          setUsers([]);
          setLoading(false);
          setError(true);
          console.log(error);
        }
      };

      getUsers();
    } else {
      const getUser = async () => {
        try {
          const { data } = await axiosClient.get(`/users/${id}`);
          setError(false);
          setLoading(false);
          setUser(data);
        } catch (error) {
          setUser(null);
          setLoading(false);
          setError(true);
          console.log(error);
        }
      };

      getUser();
    }

    return () => {};
  }, [id, global]);

  return {
    users,
    loading,
    error,
    user,
    navigate,
  };
};

export default useUser;
