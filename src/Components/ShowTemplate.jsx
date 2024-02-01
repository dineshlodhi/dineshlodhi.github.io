import React from "react";
import Button from "@mui/material/Button";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import CvTemplate from "../images/cv-template.svg";
import Typography  from "@mui/material/Typography";
import "../css/style.css";
import "../css/reset.css";


const ShowTemplate = () => {
    return (
        <div className="template-container">
            <Button disabled>
                <RemoveRedEyeIcon sx={{ color: '#4951F5' }} />
                <Typography sx= {{ textTransform: "capitalize", color: "#212121"}}>
                    &nbsp; Template
                </Typography>
            </Button>
            <img src={CvTemplate} className="template-img" alt="template-img" />
        </div>
    );
};

export default ShowTemplate;
