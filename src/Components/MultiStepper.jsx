import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useDispatch, useSelector } from "react-redux";
import { jumpToStep } from "../features/stepper/stepperSlice";

import "../css/style.css";

export default function MultiStepper() {
    const { steps, activeStep, header } = useSelector(store => store.stepper);
    const dispatch = useDispatch();

    return (
        <Box
            sx={{
                width: "100%",
                mt: "5rem",
            }}
        >
            <Stepper
                // active step code here
                activeStep={activeStep}
                alternativeLabel
                sx={{
                    "&  .Mui-active .MuiStepIcon-root": { color: "#4951F5" },
                    "& .Mui-completed .MuiStepIcon-root": { color: "#4951F5" },
                    "& .MuiStepLabel-label.Mui-active": {
                        color: "#4951F5",
                    },
                    "& .MuiStepConnector-line": {
                        borderTopWidth: "2px  solid red",
                        width: "100%",
                        padding: "2px",
                        margin: "0px",
                    },
                    "& .css-z7uhs0-MuiStepConnector-line": {
                        borderColor: "#4951F5",
                    },
                    "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
                        borderTop: "#4951F5 dotted 2px",
                    },
                    "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
                        borderColor: "#4951F5",
                    },
                }}
            >
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step
                            // jump to step event here
                           onClick={() => dispatch(jumpToStep(index))}
                            key={label}
                            {...stepProps}
                        >
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div className="multisteper-text">
                <p>{/* title here */header[activeStep].title}</p>
                <p>{/* subtitle here */header[activeStep].subTitle}</p>
            </div>
        </Box>
    )
}