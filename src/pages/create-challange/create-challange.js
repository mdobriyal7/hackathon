import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Cloud from "../../assets/cloud.svg";
import jsondata from "../../hackathon-data.json";
import {
  //   Button,
  //   TextField,
  Grid,
  Box,
  //   TextareaAutosize,
  //   Divider,
  Container,
} from "@mui/material";
// import UploadImage from "../../components/form/uploadImage";
import "./create-challange.less";

const Create = () => {
 
  const challangeData = {
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    imgUrl: "",
    level: "",
  };
  const [mydata, setData] = React.useState(challangeData);
  const convertBase64 = async (imgData) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(imgData);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const setItem = async (e) => {
    if (e.target.name != "imgUrl") {
      setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    } else {
      const imgData = e.target.files[0];
      const base64 = await convertBase64(imgData);
      console.log(base64);
      setData((prev) => ({ ...prev, imgUrl: base64 }));
    }
  };

  //     function pushData() {

  //         Hackathon_mydata.mydata.push(data);
  //   }
  //   fetch("http://localhost:3000/json", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(mydata),
  //   }).then(() => {
  //     console.log("added");
  //   });

  const onSubmit = (e) => {
    e.preventDefault();
    var fs = require("fs");
    const jsonString = JSON.stringify(mydata);
    fs.write("../../hackathon-data.json", jsonString, (err) => {
      if (err) {
        console.lof(err);
      } else {
        console.lof("success");
      }
    });
  };
  return (
    <div className="create">
      <div className="details ">
        <h1 className="challange my-auto">Challenge Details</h1>
      </div>
      <form className="formdata" onSubmit={onSubmit}>
        <div className="d-flex flex-column  ">
          <label htmlFor="challangeName" className="labelinfo">
            Challenge Name
          </label>
          <input
            type="text"
            id="challangeName"
            name="title"
            onChange={setItem}
            value={mydata.title}
          />
        </div>
        <div className="d-flex flex-column  ">
          <label htmlFor="challangeStart" className="labelinfo">
            Start Date
          </label>
          <input
            type="date"
            id="challangeStart"
            placeholder="Add start date"
            name="startDate"
            onChange={setItem}
            value={mydata.startDate}
          />
        </div>
        <div className="d-flex flex-column  ">
          <label htmlFor="challangeEnd" className="labelinfo">
            End Date
          </label>
          <input
            type="date"
            id="challangeEnd"
            name="endDate"
            onChange={setItem}
            value={mydata.endDate}
          />
        </div>
        <div className="d-flex flex-column  ">
          <label htmlFor="desc" className="labelinfo">
            Description
          </label>
          <textarea
            type="description"
            id="desc"
            name="description"
            onChange={setItem}
            value={mydata.description}
          ></textarea>
        </div>

        <div className="d-flex flex-column">
          <h1>Image</h1>
          <label
            htmlFor="files"
            className="img btn"
            style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "22px",
              color: "#666666",
              padding: "10px",
            }}
          >
            upload
            <img src={Cloud} className="p-2" />
          </label>
          <input
            id="files"
            type="file"
            style={{ display: "none" }}
            name="imgUrl"
            onChange={setItem}
          />
        </div>
        <div>
          <label htmlFor="selectitem " className="labelinfo">
            Level Type
          </label>
          <select
            className="form-select"
            id="selectitem"
            aria-label="Default select example"
            name="level"
            onChange={setItem}
            value={mydata.level}
          >
            <option value="1">Easy</option>
            <option value="2">Medium</option>
            <option value="3">Difficult</option>
          </select>
        </div>
        <button
          type="button"
          className="bttn"
          style={{ backgroundColor: "#44924C" }}
          onClick={onSubmit}
        >
          Create Challange
        </button>
      </form>
    </div>
  );
};
export default Create;
