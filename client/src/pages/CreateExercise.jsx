import apiFetch from "../lib/apiFetch";
import { useNavigate } from "react-router-dom";

export default function CreateExercise() {
  const navigate = useNavigate();
  return (
    <div>
      <form className="form" onSubmit={createExercise}>
        <input type="text" name="name" placeholder="Name" />
        <input type="number" name="length" placeholder="Length (minutes)" />
        <button>Submit</button>
      </form>
    </div>
  );

  async function createExercise(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const length = e.target.length.value;

    await apiFetch(`/api/exercises/create`, {
      method: "post",
      body: {
        exerciseName: name,
        exerciseLength: length,
      },
    });

    navigate("/exercises");
  }
}
