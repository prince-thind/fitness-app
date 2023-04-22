import { useState, useEffect } from "react";
import apiFetch from "../lib/apiFetch";
import { useNavigate } from "react-router-dom";

export default function CreateProgram() {
  const [exercises, setExercises] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await apiFetch("/api/exercises");
      setExercises(res.exercises);
    })();
  }, []);
  return (
    <div>
      <form className="form" onSubmit={createProgram}>
        <input type="text" name="name" placeholder="Name" />
        <label htmlFor="exercises">Select Exercise Below:</label>
        <select multiple name="exercises" id="exercises">
          {exercises.map((e) => {
            return (
              <option key={e._id} data-id={e._id} value={e.exerciseName}>
                {e.exerciseName}
              </option>
            );
          })}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );

  async function createProgram(e) {
    e.preventDefault();
    const ids = [...e.target.exercises.selectedOptions].map((e) =>
      e.getAttribute("data-id")
    );
    const name = e.target.name.value;

    const res = await apiFetch(`/api/programs/create`, {
      method: "post",
      body: {
        programName: name,
        exercises: JSON.stringify(ids),
      },
    });

    navigate(`/programs/${res.program._id}`);
  }
}
