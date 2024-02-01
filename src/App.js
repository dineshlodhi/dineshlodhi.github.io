// Task 2: Add imports here
import Grid from "@mui/material/Grid";
import MultiStepper from "./Components/MultiStepper";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import ShowTemplate from "./Components/ShowTemplate";
import EmployeeInfo from "./Components/EmployeeInfo";
import EmployeeExperience from "./Components/EmployeeExperience";
import EmployeeEducation from "./Components/EmployeeEducation";
import EmployeeSkills from "./Components/EmployeeSkills";
import EmployeeInterests from "./Components/EmployeeInterests";
import Resume from "./Components/Resume";

// Task 4: Add import here

// Task 6: Add employee info import here

// Task 9: Add employee work import here

// Task 11: Add employee education import here

// Task 13: Add employee skills import here

// Task 15: Add employee interests import here

// Task 16: Add import here


function App() {

  // Task 2: retreive steps here
  const { activeStep } = useSelector((store) => store.stepper);

  // function to render all the froms
  function renderForms(activeStep) {
    switch (activeStep) {
      // Task 6: Add employee info case here
      case 0:
        return <EmployeeInfo />;
      // Task 9: Add employee work case here
      case 1: 
        return <EmployeeExperience />;
      // Task 11: Add employee education case here
      case 2:
        return <EmployeeEducation />

      // Task 13: Add employee skills case here
      case 3:
       return <EmployeeSkills />
      // Task 15: Add employee interests case here

     case 4:
      return <EmployeeInterests />

      default:
        break;
    }
  }
  /* Task 2+4+15: add template here.*/
  return (
   <div className="App">
     {/* final template here.*/}
     <Container label={'margin="none"'} sx={{ mt: 10, mb: 10 }}>
       <MultiStepper sx={{ mt: 6 }} />
       {activeStep < 5 ? (
         <Grid container>
           <Grid item md={8} lg={8} sm={12}>
             {renderForms(activeStep)}
           </Grid>
           <Grid item md={4} lg={4} sm = {12} xs={12} >
              <ShowTemplate />
           </Grid>
         </Grid>
       ) : (
         <Grid container>
          <Resume />
         </Grid>
       )}
     </Container>
 
   </div>
  );
}

export default App;

