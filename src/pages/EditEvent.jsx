import { useForm } from "react-hook-form";
import { useEvent } from "../context/EventContext";
import { useAuth } from "../context/AuthContext";
import { useNotification } from "../context/NotificationContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const CreateEvent = () => {
  const { register, handleSubmit } = useForm();
  const { editEvent } = useEvent();
  const { createNotification } = useNotification();
  const { user } = useAuth();

  const navigate = useNavigate();
  const { id } = useParams();
  const onSubmit = handleSubmit((data) => {
    data = { usuarioId: user.id, ...data };

    console.log(data);
    console.log(id);
    editEvent(id, data);
    navigate("/profile");
    createNotification({
      descripcion: `${user.nombre} ${user.apellido} ha editado un evento`,
      usuarioId: user.id,
    });
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-2">
        <Link to="/profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </Link>
        <h2 className="font-bold uppercase">Editar evento</h2>
      </div>
      <div className="flex justify-center mt-4">
        <form
          onSubmit={onSubmit}
          className="flex flex-col md:w-2/3 w-full px-8 mx-auto space-y-4"
        >
          <input
            className="p-4 rounded"
            type="text"
            placeholder="Ingresa un nuevo titulo"
            {...register("titulo", { required: true })}
            autoFocus
          />
          <textarea
            className="p-4 rounded"
            type="text"
            placeholder="Ingresa un nueva descripcion"
            {...register("descripcion", { required: true })}
          />
          <button className="bg-yellow-600 text-white p-4 uppercase">
            Editar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
