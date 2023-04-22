import { useState, useEffect } from "react";
import apiFetch from "../lib/apiFetch";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateProgram() {
  const [exercises, setExercises] = useState([]);
  const [program, setProgram] = useState({});
  const id = useParams().id;

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await apiFetch("/api/exercises");
      setExercises(res.exercises);

      const programRes = await apiFetch("/api/programs/" + id);
      setProgram(programRes.program);
    })();
  }, [id]);

  if (Object.keys(program).length == 0) {
    return "loading...";
  }
  return (
    <div>
      <form className="form" onSubmit={updateProgram}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={program.programName}
          onChange={updateProgramName}
        />
        <input type="hidden" name="id" value={program._id} />
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

  async function updateProgram(e) {
    e.preventDefault();
    const ids = [...e.target.exercises.selectedOptions].map((e) =>
      e.getAttribute("data-id")
    );
    const name = e.target.name.value;
    const id = e.target.id.value;

    const res = await apiFetch(`/api/programs/update`, {
      method: "put",
      body: {
        id,
        programName: name,
        exercises: JSON.stringify(ids),
      },
    });

    navigate(`/programs/${res.program._id}`);
  }

  function updateProgramName(e) {
    const programCopy = { ...program };
    programCopy.programName = e.target.value;
    setProgram(programCopy);
  }
}
