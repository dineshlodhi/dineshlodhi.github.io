import React from "react";
import "../css/style.css";
import "../css/reset.css";
import { FieldArray, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import * as msg from "../utilities/validationMessages";
import ExperienceForm from "./ExperienceForm";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep } from "../features/stepper/stepperSlice";
import { saveWork } from "../features/work/workSlice";

const EmployeeExperience = () => {
const { work } = useSelector((store) => store);
const dispatch = useDispatch();

const experienceEmpty = {
    title: "",
    organization: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
    description: "",
};

const formik = useFormik({
    initialValues: {
    work: work.experience,
    },
    // formik validation here
    validationSchema: Yup.object().shape({
    work: Yup.array().of(
        Yup.object().shape({
        title: Yup.string()
            .min(3, msg.minTitle)
            .max(50, msg.maxTitle)
            .required("Required!"),
        organization: Yup.string()
            .min(3, msg.minOrganization)
            .max(50, msg.maxOrganization)
            .required("Required!"),
        city: Yup.string()
            .min(3, msg.minCity)
            .max(28, msg.maxCity)
            .required("Required!"),
        country: Yup.object().nullable().required("Required!"),
        description: Yup.string()
            .min(20, msg.minDescription)
            .required("Required!")
            .max(255, msg.maxDescription),
        startDate: Yup.date()
            .nullable()
            .required("Required!")
            .test("startDate", "Future Dates are not allowed", (value) => {
            const today = new Date();
            return value?.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0);
            })
            .transform((v) => (v instanceof Date && !isNaN(v) ? v : null)),

        endDate: Yup.date()
            .nullable()
            .min(Yup.ref("startDate"), "End date can't be before Start date")
            .nullable()
            .required("Required!")
            .test("endDate", "Future Dates are not allowed", (value) => {
            const today = new Date();
            return value?.setHours(0, 0, 0, 0) <= today.setHours(0, 0, 0, 0);
            })
            .transform((v) => (v instanceof Date && !isNaN(v) ? v : null)),
        })
    ),
    }),
    onSubmit: (values) => {
        // save work code
        if (formik.isValid) {
            dispatch(saveWork(values));
            dispatch(nextStep());
        }
    },
});

return (
    <React.Fragment>
    <FormikProvider value={formik}>
        <FieldArray
        name="work"
        render={(arrayHelpers) => (
            <AddCircleIcon
            sx={{
                float: "right",
                marginTop: "10px",
                fontSize: "30px",
                cursor: "pointer",
            }}
            onClick={() => {
                arrayHelpers.insert(formik.values.work.length, experienceEmpty);
            }}
            />
        )}
        ></FieldArray>
        <FieldArray
        name="work"
        render={(arrayHelpers) => (
            <div>
            {formik.values.work.map((experience, index) => {
                return (
                <React.Fragment key={index}>
                    {index > 0 && (
                    <CloseIcon
                        sx={{
                        float: "right",
                        fontSize: "30px",
                        marginTop: "10px",
                        cursor: "pointer",
                        }}
                        onClick={() => {
                        arrayHelpers.remove(index);
                        }}
                    />
                    )}
                    <form className="form-group">
                    <ExperienceForm
                        experience={experience}
                        index={index}
                        formik={formik}
                    ></ExperienceForm>
                    </form>
                </React.Fragment>
                );
            })}
            </div>
        )}
        ></FieldArray>
    </FormikProvider>
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
        color="inherit"
        // previous step code here
        onClick={() => dispatch(prevStep())}
        sx={{ mr: 1 }}
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
    </React.Fragment>
);
};

export default EmployeeExperience;