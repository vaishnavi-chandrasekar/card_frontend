import React, { useState, useEffect } from "react";
import "./Card.css";

function Card() {
  const [colors, setcolors] = useState("");
  // setcolors("red","yellow","green")
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let items = await fetch("http://localhost:5000/userall");
        let userdata = await items.json();
        setUsers(userdata);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // const color=["red","yellow","green"]
  return (
    <>
      {users.map((user, index) => {
        return (
          <div className="card" key={index}>
            <h3> Card Title : {user.cardtitle}</h3>
            <h3>
              Status :{" "}
              <button
                className="box"
                {...(user.status ==="Todo"
                 ? {style:{backgroundColor:"red"}}
                  :user.status === "Processing"
                  ? { style: { backgroundColor: "#FFFF33" } }
                  : { style: { backgroundColor: "green" } })}
              ></button>
              {user.status}
            </h3>
          </div>
        );
      })}
    </>
  );
}

export default Card;
