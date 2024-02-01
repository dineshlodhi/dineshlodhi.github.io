import React from "react";
import {Grid, Box, Button} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import * as msg from "../utilities/validationMessages";
import "../css/reset.css";
import InputField from "./InputField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { nextStep, prevStep } from "../features/stepper/stepperSlice";
import { saveInfo } from "../features/info/infoSlice";
import { Autocomplete, InputLabel, TextField } from "@mui/material";
import { countriesList } from "../utilities/countiresList";
import "../css/style.css";
import { getIn } from "formik";

const phoneRegExExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm;

const EmployeeInfo = () => {
    const { info } = useSelector((store) => store);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: info.firstName,
            lastName: info.lastName,
            phone: info.phone,
            email: info.email,
            city: info.city,
            country: info.country,
            summary: info.summary,
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, msg.minFname)
                .max(16, msg.maxFname)
                .required("Required!"),
            lastName: Yup.string()
                .min(3, msg.minLname)
                .max(16, msg.maxLname)
                .required("Required!"),
            phone: Yup.string()
                .matches(phoneRegExExp, msg.phone)
                .required("Required!"),
            email: Yup.string()
                .email(msg.email)
                .required("Required!"),
            city: Yup.string()
                .min(3, msg.minCity)
                .max(28, msg.maxCity)
                .required("Required!"),
            country: Yup.object().nullable().required("Required!"),
            summary: Yup.string()
                .min(20, msg.minSummary)
                .max(255, msg.maxSummary)
                .required("Required!"),
        }),
        onSubmit: (values) => {
            debugger;
            if (formik.isValid) {
                dispatch(saveInfo(values));
                dispatch(nextStep());
            }
        },
    });
    const countryValues = getIn(formik.values, "country");
    const summaryValues = getIn(formik.values, "summary");
    const countryError = getIn(formik.errors, "country");
    const countryTouch = getIn(formik.touched, "country");
    const summaryError = getIn(formik.errors, "summary");
    const summaryTouch = getIn(formik.touched, "summary");

    return (
        <>
            <form>
                {
                    <Grid container spacing={4}>
                        <Grid item xs={6} className="item">
                            <InputField
                                label="First Name"
                                type="text"
                                placeholder="e.g Dinesh"
                                name="firstName"
                                id="firstName"
                                formik={formik}
                            ></InputField>
                        </Grid>
                        <Grid item xs={6} className="item">
                            <InputField
                                label="Last Name"
                                type="text"
                                placeholder="e.g Lodhi"
                                name="lastName"
                                id="lastName"
                                formik={formik}
                            ></InputField>
                        </Grid>
                        <Grid item xs={6} className="item">
                            <InputField
                                label="Phone Number"
                                type="tel"
                                placeholder="e.g 9666 116022"
                                name="phone"
                                id="phone"
                                formik={formik}
                            ></InputField>
                        </Grid>
                        <Grid item xs={6} className="item">
                            <InputField
                                label="Email"
                                type="email"
                                placeholder="e.g dineshlodhi102@gmail.com"
                                name="email"
                                id="email"
                                formik={formik}
                            ></InputField>
                        </Grid>
                        <Grid item xs={6} className="item">
                            <InputField
                                label="City"
                                type="text"
                                placeholder="e.g Hyderabad"
                                name="city"
                                id="city"
                                formik={formik}
                            ></InputField>
                        </Grid>
                        <Grid item xs={6} className="item">
                           <InputLabel
                                shrink
                                htmlFor="input"
                                className="text-input label-margin"
                                type="select"
                            >
                                Country
                            </InputLabel>
                            {formik && (
                                <Autocomplete
                                    className="countries-input"
                                    options={countriesList}
                                    autoHighlight
                                    name="country"
                                    id="country"
                                    onChange={(e, value) => formik.setFieldValue("country", value)}
                                    value={countryValues}
                                    renderInput={(params) => (
                                        <TextField
                                            onBlur={formik.handleBlur}
                                            {...params}
                                            placeholder="Choose a country"
                                            inputProps={{...params.inputProps,}}
                                        ></TextField>
                                    )}
                                ></Autocomplete>
                            )}
                            {
                                countryError && countryTouch &&
                                    <p className="error-text">{countryError}</p>
                            }
                        </Grid>
                        <Grid item xs={12} className="item">
                            <InputLabel
                                shrink
                                htmlFor="summary"
                                className="text-input"
                                sx={{ marginLeft: "1.5rem" }}
                            >
                                Summary
                            </InputLabel>
                            <TextField
                                placeholder="Write Your Summary Here"
                                name="summary"
                                id="summary"
                                className=""
                                type="text"
                                multiline
                                rows={3}
                                fullWidth
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={summaryValues}
                            ></TextField> 
                            {
                                summaryError && summaryTouch && 
                                    <p className="error-text"> { summaryError }</p>
                            }
     
                        </Grid>
                    </Grid>}
                    <Box
                        sx={{ display:"flex", flexDirection:"row", pt:2 }}
                    >
                        <Button
                            color="inherit"
                            onClick={() => dispatch(prevStep())}
                            sx={{ mr: 1}}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button
                            onClick={() => formik.handleSubmit()}
                            variant="contained"
                            sx={{ background: "#4951F5" }}
                        >
                            Next
                        </Button>
                    </Box>
            </form>
        </>
    );
};

export default EmployeeInfo;
