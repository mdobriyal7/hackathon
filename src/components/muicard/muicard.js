import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import cheerful from "../../assets/cheerful.jpg";
import "./muicard.less";
import { FiCheckCircle } from "react-icons/fi";

const Muicard = () => {

  
  return (
    <Box sx={{ background: "#003145", padding: "70px 10% 70px 10%" }}>
      <Card sx={{ maxWidth: 345, borderRadius: "15px" }}>
        <CardMedia
          component="img"
          height="174"
          image={cheerful}
          sx={{ width: "354px" }}
        />
        <CardContent>
          <div className="items">
            <button className="badge border border-0">
              <span className="status">Active</span>
            </button>
            <p className="title">Data Science Bootcamp - Graded Datathon</p>
            <p>Starts in</p>
            <button className="check">
              <FiCheckCircle style={{ color: "white", margin: "10px" }} />
              Participate Now
            </button>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Muicard;
