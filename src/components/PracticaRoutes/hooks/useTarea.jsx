import { useEffect, useState } from "react";
import { axiosClient } from "../axios";
import { useNavigate, useParams } from "react-router-dom";

const useTarea = (global = true) => {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tarea, setTarea] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (global) {
      const getTareas = async () => {
        try {
          const { data } = await axiosClient.get("todos");
          setError(false);
          setLoading(false);
          setTareas(data);
        } catch (error) {
          setTareas([]);
          setLoading(false);
          setError(true);
          console.log(error);
        }
      };

      getTareas();
    } else {
      const getTarea = async () => {
        try {
          const { data } = await axiosClient.get(`/todos/${id}`);
          setError(false);
          setLoading(false);
          setTarea(data);
        } catch (error) {
          setTarea(null);
          setLoading(false);
          setError(true);
          console.log(error);
        }
      };

      getTarea();
    }

    return () => {};
  }, [id, global]);

  return {
    tareas,
    loading,
    error,
    tarea,
    navigate
  };
};

export default useTarea;
