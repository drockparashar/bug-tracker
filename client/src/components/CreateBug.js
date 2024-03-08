import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBug = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/bug/create", {
        title,
        description,
        image,
        priority,
        status,
      });
      alert("Bug created Succesful");
      navigate('/home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form action="">
        <div className="form_container">
          <div className="form_control">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              placeholder="Enter title..."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="text">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              cols="50"
              rows="4"
              placeholder="Enter Address"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="form_control">
            <label htmlFor="image">Image</label>
            <input
              name="image"
              type="text"
              placeholder="Enter image url"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </div>
          <div className="form_control">
            <label htmlFor="priority">Priority</label>
            <select
              name="priority"
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>

          <div
            className="form_control"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <label htmlFor="status">Status</label>
            <select name="status" id="job_role">
              <option value="">Select Status</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Testing">Testing</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>
        <div className="button_container">
          <button type="submit" onClick={submit}>
            Apply Now
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateBug;
