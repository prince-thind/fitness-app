import { useEffect, useState } from "react";
import apiFetch from "../lib/apiFetch.js";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    refreshList();
  }, []);
  return (
    <div>
      <ol className="list">
        {exercises.map((exercise) => {
          return (
            <li key={exercise._id}>
              <div>
                Name:
                {exercise.exerciseName}
              </div>
              <div>ID: {exercise._id}</div>
              <div>length: {exercise.exerciseLength}</div>
              <button data-id={exercise._id} onClick={deleteExercise}>
                Delete?
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );

  async function deleteExercise(e) {
    const id = e.target.getAttribute("data-id");
    await apiFetch(`/api/exercises/delete/${id}`, { method: "delete" });
    refreshList();
  }

  async function refreshList() {
    const res = await apiFetch("/api/exercises");
    setExercises(res.exercises);
  }
}
