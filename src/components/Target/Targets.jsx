import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import UserContext from "../Context/UserContext";
import { useContext, useState } from "react";

export default function Targets() {
  const con = useContext(UserContext);

  const [activeStep, setActiveStep] = useState(0);
  const [step, setStep] = useState(con.board);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-24">
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {step.map((step, index) => {
            return (
              <Step key={step.nameBoard}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">آخرین هدف</Typography>
                    ) : null
                  }
                >
                  {step.nameBoard}
                </StepLabel>
                <StepContent>
                  <Typography>{step.idBoard}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        size="small"
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === step.length - 1 ? "پایان" : "ادامه"}
                      </Button>
                      <Button
                        size="small"
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        بازگشت
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === step.length && (
          <Paper square elevation={0} sx={{ p: 3 }} className="!rounded-xl ">
            <Typography>دمت گرم به همه اهدافت رسیدی</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              ریست
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
}
