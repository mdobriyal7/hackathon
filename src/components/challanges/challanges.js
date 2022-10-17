import React, { useState } from "react";
import "./challanges.less";
import tick from "../../assets/tick.svg";
import { FiCheckCircle } from "react-icons/fi";
import Hackathon_data from "../../hackathon-data";

const Challanges = () => {
  // const[data, setdata]=useState()
  function status() {
    var currentTime = new Date().getTime();
    var setTime = new Date(Hackathon_data.data[0].startDate).getTime();
    var timeRemaining = setTime - currentTime;
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var mins = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var newDays = days < 10 ? 0 + `${days}` : `${days}`;
    var newHours = hours < 10 ? 0 + `${hours}` : `${hours}`;
    var newMins = mins < 10 ? 0 + `${mins}` : `${mins}`;

    var time = ` ${newDays} : ${newHours} : ${newMins}`;

    return time;
  }

 
  return (
    <div className="challanges">
      {Hackathon_data.data.map((items) => {
        return (
          <div
            className="card"
            style={{
              width: "354px",
              height: "473px",
              border: "none",
              borderRadius: "15px",
            }}
          >
            <img
              src={items.imgUrl}
              className="card-img-top"
              alt="..."
              style={{ height: "174px", borderRadius: "15px" }}
            />
            <div className="items">
              <button className="badge border border-0">
                <span className="status">Active</span>
              </button>
              <p className="title">{items.title}</p>
              <p>Starts in</p>
              <p>{status()}</p>
              <button className="check">
                <FiCheckCircle style={{ color: "white", margin: "10px" }} />
                Participate Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Challanges;
