import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiFetch from "../lib/apiFetch.js";

export default function Program() {
  const [program, setProgram] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await apiFetch("/api/programs/" + id);
      setProgram(res.program);
    })();
  }, [id]);

  return (
    <div>
      <ol className="list">
        <div>
          Name:
          <Link to={`/programs/${program._id}`}>{program.programName}</Link>
        </div>
        <div>ID: {program._id}</div>
        <button data-id={program._id} onClick={deleteProgram}>
          Delete?
        </button>
        <div>
          Exercises:
          <ol className="list">
            {program.exercises?.map((exercise) => {
              return (
                <li key={exercise._id}>
                  <div>
                    Name:
                    {exercise.exerciseName}
                  </div>
                  <div>ID: {exercise._id}</div>
                  <div>length: {exercise.exerciseLength}</div>
                </li>
              );
            })}
          </ol>
        </div>
      </ol>
    </div>
  );

  async function deleteProgram(e) {
    const id = e.target.getAttribute("data-id");
    await apiFetch(`/api/programs/delete/${id}`, { method: "delete" });
    navigate("/programs");
  }
}
