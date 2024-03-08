import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";

const Home = () => {
  const [bugs, setBugs] = useState([]);
  const [status, setStatus] = useState("");
  
  const update = async (e) => {
    console.log(e,status);
    try {
      await axios.put("http://localhost:3002/bug/update", {
        _id:e,
        status,
      });
      const response = await axios.get("http://localhost:3002/bug/get");
        console.log(response.data);
        setBugs(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getBugs = async () => {
      try {
        const response = await axios.get("http://localhost:3002/bug/get");
        console.log(response.data);
        setBugs(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBugs();
  }, []);

  return (
    <>
      <Navigation />
      <h1>Assigned Bugs</h1>
      <ul>
        {bugs.map((bug) => (
          <li key={bug._id}>
            <div>
              <h2>{bug.title}</h2>
            </div>
            <div className="instructions">
              <p>{bug.description}</p>
            </div>
            <img src={bug.image} alt={bug.title} />
            <p>Priority: {bug.priority} </p>
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value="">{bug.status}</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Testing">Testing</option>
              <option value="Closed">Closed</option>
            </select>
            <button onClick={() => update(bug._id)}>Update</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
