import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [usStates, setUsStates] = useState("");
  const [validationState, setValidationState] = useState({});
  const isValidated = () => {
    let valid = true
    for (const property in validationState) {
      if (!validationState[property]) {
        valid = false
        break
      }
    }
    return valid
  }
  
  let navigate = useNavigate();
  const handleSubmit = () => {
    // if (isValidated()) {
      navigate("/thankyou"); 

      // }
  }
  return (
    <>
      <Paper
        elevation={8}
        style={{
          padding: 10,
          margin: 20,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="firstName"
              label="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setValidationState({
                  ...validationState,
                  firstName: !!e.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="lastName"
              label="Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setValidationState({
                  ...validationState,
                  lastName: !!e.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setValidationState({
                  ...validationState,
                  email: !!e.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="zipcode"
              label="Zip code"
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
                value={usStates}
                label="US State"
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
