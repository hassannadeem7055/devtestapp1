import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [usStates, setUsStates] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationState, setValidationState] = useState({
    firstName: false,
    lastName: false,
    email: false,
    zipcode: false,
    usStates: false,
  });
  const isValidated = () => {
    let valid = true;
    for (const property in validationState) {
      if (!validationState[property]) {
        valid = false;
        break;
      }
    }
    return valid;
  };

  let navigate = useNavigate();
  const handleSubmit = () => {
    setIsSubmitted(true);
    if (isValidated()) {
      navigate("/thankyou");
    }
  };
  return (
    <>
      <Paper
        elevation={8}
        style={{
          padding: 10,
          margin: 20,
        }}
      >
        {JSON.stringify(validationState)}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="firstName"
              label="First name"
              error={isSubmitted && !validationState.firstName}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setValidationState({
                  ...validationState,
                  firstName:
                    !RegExp("[^a-zA-Z ]").test(e.target.value) &&
                    e.target.value !== "",
                });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="lastName"
              label="Last name"
              error={isSubmitted && !validationState.lastName}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setValidationState({
                  ...validationState,
                  lastName:
                    !RegExp('[^a-zA-Z-" ]').test(e.target.value) &&
                    e.target.value !== "",
                });
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              error={isSubmitted && !validationState.email}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setValidationState({
                  ...validationState,
                  email:
                    RegExp(
                      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
                    ).test(e.target.value) && e.target.value !== "",
                });
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="zipcode"
              label="Zip code"
              error={isSubmitted && zipcode === ""}
              value={zipcode}
              onChange={(e) => {
                setZipcode(e.target.value);
                setValidationState({
                  ...validationState,
                  zipcode: !!e.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="usStates">US State</InputLabel>
              <Select
                labelId="select-label"
                id="usStates"
                label="US State"
                value={usStates}
                error={isSubmitted && usStates === ""}
                onChange={(e) => {
                  setUsStates(e.target.value);
                  setValidationState({
                    ...validationState,
                    usStates: !!e.target.value,
                  });
                }}
              >
                <MenuItem value="Washington DC">Washington DC</MenuItem>
                <MenuItem value="California">California</MenuItem>
                <MenuItem value="Florida">Florida</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button variant="outline" color="primary" id="">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ContactForm;
