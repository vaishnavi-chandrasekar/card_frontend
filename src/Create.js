import React, { useState } from "react";
import "./Create.css";
import Modal from "react-modal";
import { useFormik } from "formik";

function Create() {
  var page = setTimeout(function(){
    window.location.reload(false);
  },10000)
  var reload= function(){
    window.location.reload(false)
  }
  const [value,input]=useState("")
  const formik = useFormik({
    initialValues: {
      cardtitle: "",
     status:"",
    },
    onSubmit: async (values) => {
      try {
        await fetch("http://localhost:5000/userpost", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "content-type": "application/json",
          },
        });
        alert("data saved", {onClick:{reload}});
      } catch (error) {
        console.log(error);
      }
    },
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="popup">
      <h1>Create Card</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Card title"
          name="cardtitle"
          onChange={formik.handleChange}
          value={formik.values.cardtitle} required
        ></input>
        <br />
        <select defaultValue={"DEFAULT"} name="status"
            onChange={formik.handleChange}
            value={formik.values.value} required>
          <option value="DEFAULT" disabled>Status</option>
          <option
            name="status"
            onChange={formik.handleChange}
            value={formik.values.value}
          >
            Todo
          </option>
          <option
            
            name="status"
            onChange={formik.handleChange}
            value={formik.values.value}
          >
            Processing
          </option>
          <option
           
            name="status"
            onChange={formik.handleChange}
            value={formik.values.value}
          >
            Done
          </option>
        </select>
        <br />
        <div className="btn">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
