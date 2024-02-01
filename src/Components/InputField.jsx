import React from "react";
import { InputLabel, Input } from "@mui/material";
import { getIn } from "formik";

const InputField = ({ label, type, placeholder, name, id, formik, index }) => {
    const error = getIn(formik.errors, name);
    const touch = getIn(formik.touched, name);
    const values = getIn(formik.values, name);

    return (
        <React.Fragment>
            {
                <InputLabel
                    shrink
                    htmlFor={name}
                    className="text-input"
                    sx={{marginLeft: "1.5rem" }}
                >
                    {label}
                </InputLabel>
            }

            {
                <Input 
                    placeholder= {placeholder}
                    name={name}
                    id={id}
                    className=""
                    type={type}
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={values}
                ></Input>
            }
            {
                error && touch && <p className="error-text"> {error} </p>
            }
        </React.Fragment>
    );
}

export default InputField;
