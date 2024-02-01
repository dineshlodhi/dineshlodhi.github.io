import React from "react";
import Grid from "@mui/material/Grid";
import InputField from "./InputField";
import Typography from "@mui/material/Typography";
import "../css/style.css";
import "../css/reset.css";
import { Autocomplete, InputLabel, TextField } from "@mui/material";
import { countriesList } from "../utilities/countiresList";
import { getIn } from "formik";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const ExperienceForm = ({ index, formik }) => {
    const countryValues = getIn(formik.values, `work[${index}].country`);
    const error = getIn(formik.errors, `work[${index}].country`);
    const touch = getIn(formik.touched, `work[${index}].country`);
    const startDateError = getIn(formik.errors, `work[${index}].startDate`);
    const startDateTouch = getIn(formik.touched, `work[${index}].startDate`);
    const startDateValue = getIn(formik.values, `work[${index}].startDate`);
    const endDateError = getIn(formik.errors, `work[${index}].endDate`);
    const endDateTouch = getIn(formik.touched, `work[${index}].endDate`);
    const endDateValue = getIn(formik.values, `work[${index}].endDate`);
    const descriptionError = getIn(formik.errors, `work[${index}].description`);
    const descriptionTouch = getIn(formik.touched, `work[${index}].description`);
    const descriptionValue = getIn(formik.values, `work[${index}].description`);

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={6} className="item">
                    <InputField
                        label="Title"
                        type="text"
                        placeholder=" e.g. Graphic Designer"
                        name={`work[${index}].title`}
                        value
                        id="title"
                        index={index}
                        formik={formik}
                    ></InputField>
                </Grid>
                <Grid item xs={6} className="item">
                    <InputField
                        label="Organization"
                        type="text"
                        placeholder="e.g. Educative"
                        name={`work[${index}].organization`}
                        id="organization"
                        index={index}
                        formik={formik}
                    ></InputField>
                </Grid>
                <Grid item xs={6} className="item">
                    <InputField
                        label="City"
                        type="text"
                        placeholder="e.g. New York"
                        name={`work[${index}].city`}
                        id="city"
                        index={index}
                        formik={formik}
                    ></InputField>
                </Grid>
                <Grid item xs={6} className="item">
                    <InputLabel
                        shrink
                        htmlFor="input"
                        className="text-input lable-margin"
                        type="select"
                    >
                        Country
                    </InputLabel>

                    {/* write autocomplete and textfield code here */}
                    {formik && (
                        <Autocomplete
                            className="countries-input"
                            options={countriesList}
                            autoHighlight
                            name={`work[${index}].country`}
                            id={`work[${index}].country`}
                            onChange={(e, value) => formik.setFieldValue(`work[${index}].country`, value)}
                            value={countryValues}
                            renderInput={(params) => (
                                <TextField
                                    onBlur={formik.handleBlur}
                                    {...params}
                                    placeholder="Choose a Country"
                                    inputProps={{
                                        ...params.inputProps,
                                    }}
                                />
                            )}
                        />
                    )}
                    {error && touch && <p className="error-text">{error}</p>}




                </Grid>
                <Grid item xs={6} className="date-item">
                    <Typography style={{ display: "flex" }}>
                        <InputLabel
                            shrink
                            htmlFor="input"
                            className="text-input label-margin"
                        >
                            Start Date
                        </InputLabel>
                    </Typography>
                    <div className="date-picker">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                className="desktopPicker"
                                inputFormat="MM/DD/YYYY"
                                value={startDateValue}
                                name={`work[${index}].startDate`}
                                id="date"
                                onChange={(value) => {
                                    formik.setFieldValue(`${`work[${index}].startDate`}`, value);
                                }}
                                onBlur={formik.handleBlur}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        formik={formik}
                                        onBlur={formik.handleBlur}
                                        name={`work${index}].startDate`}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                    </div>

                    {startDateError && startDateTouch && <p className="error-text">{startDateError}</p>}

                </Grid>
                <Grid item xs={6} className="date-item">
                    <Typography style={{ display: "flex" }}>
                        <InputLabel
                            shrink
                            htmlFor="input"
                            className="text-input label-margin"
                        >
                            End Date
                        </InputLabel>
                    </Typography>

                    <div className="date-picker">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                className="desktopPicker"
                                inputFormat="MM/DD/YYYY"
                                value={endDateValue}
                                name={`work[${index}].endDate`}
                                id="endDate"
                                onChange={(value) => {
                                    formik.setFieldValue(`${`work[${index}].endDate`}`, value);
                                }}
                                onBlur={formik.handleBlur}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        formik={formik}
                                        onBlur={formik.handleBlur}
                                        name={`work${index}].endDate`}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                    </div>

                    {endDateError && endDateTouch && <p className="error-text">{endDateError}</p>}


                </Grid>
                <Grid item xs={12} className="item">

                    {/* write input label component */
                        <InputLabel
                            shrink
                            htmlFor={`work[${index}].description`}
                            className="text-input"
                            sx={{ marginLeft: "1.5rem" }}
                        >
                            Description
                        </InputLabel>}

                    <TextField
                        placeholder="Write Your Job Description Here"
                        name={`work[${index}].description`}
                        id={`work[${index}].description`}
                        className=""
                        type="text"
                        multiline
                        rows={3}
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={descriptionValue}
                    />

                    {/* write error message code here */descriptionError && descriptionTouch && <p className="error-text">{descriptionError}</p>}

                </Grid>
            </Grid>
        </>
    );
};

export default ExperienceForm;