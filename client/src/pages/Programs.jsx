import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import apiFetch from "../lib/apiFetch.js";

export default function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await apiFetch("/api/programs");
      setPrograms(res.programs);
    })();
  }, []);
  return (
    <div>
      <ol className="list">
        {programs.map((program) => {
          return (
            <li key={program._id}>
              <div>
                Name:
                <Link to={`/programs/${program._id}`}>
                  {program.programName}
                </Link>
              </div>
              <div>ID: {program._id}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
