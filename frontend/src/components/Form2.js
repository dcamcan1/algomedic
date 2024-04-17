import {
  TextField,
  MenuItem,
  FormControl,
  FormHelperText,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState, useContext } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { useNavigate } from "react-router";
import dayjs from "dayjs";
import { PatientDataContext } from "./PatientDataContext";
import styled from "@emotion/styled";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Form2 = ({ setDispo, setSelectedSubCategory }) => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { patientData, setPatientData } = useContext(PatientDataContext);
  const StyledDatePicker = styled(DatePicker)`
    max-width: 500px;
  `;

  const handleAuto = () => {
    setPatientData({
      firstName: "John",
      lastName: "Doe",
      gender: "Male",
      mrn: "123456789",
      dob: dayjs("1901-01-01"),
      phone: "111-111-1111",
      armyUnit: "101st Airborne Division",
      hpi: "DEMO PATIENT: The patient is complaining of chest pain. He first noticed the pain 2 mo ago but attributed it to indigestion. He describes the pain as a pressure sensation in the middle of his chest that does not radiate anywhere else. It seems to come only with exertion and not at rest. He noticed it last week when he had to shovel snow; he has had no pain since then. He says the pain usually lasts 10 to 15 min and goes away if he takes a break. When present, the pain is not worsened by movement or breathing. The last time he got the pain, he took an aspirin, which he thinks helped. The pain is not associated with shortness of breath, nausea, or diaphoresis. He denies any recent fever, cough, or infectious symptoms.",
    });
  };

  const handleClear = () => {
    setPatientData({
      firstName: "",
      lastName: "",
      gender: "",
      mrn: "",
      dob: null,
      phone: "",
      armyUnit: "",
      hpi: "",
    });
    setDispo("");
  };

  const handleSubmit = () => {
    if (
      !patientData.firstName ||
      !patientData.lastName ||
      !patientData.gender ||
      !patientData.mrn ||
      !patientData.phone ||
      !patientData.armyUnit ||
      !patientData.hpi ||
      !patientData.dob
    ) {
      setError(true);
      return;
    } else {
      setError(false);
      setSelectedSubCategory("");
      setDispo("");
      navigate("/algorithm");
    }
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      text: {
        primary: "#D3D3D3", // Change this to the color you want for dark mode
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <button
          className="btn btn-secondary"
          type="button"
          style={{
            marginTop: 20,
            marginBottom: 20,
            maxHeight: 40,
            maxWidth: 300,
            alignSelf: "center",
          }}
          onClick={handleAuto}
        >
          Auto-Fill Demo Patient
        </button>
        <FormControl>
          {error && <ErrorMessage>Please fill out all fields</ErrorMessage>}
          <Grid container spacing={0} width={600} alignSelf={"center"}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                style={{ marginBottom: 10, maxWidth: 246, marginTop: 20 }}
                color="success"
                variant="outlined"
                value={patientData.firstName}
                fullWidth
                required
                autoComplete="off"
                onChange={(e) =>
                  setPatientData({ ...patientData, firstName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                style={{ maxWidth: 246, marginTop: 20 }}
                color="success"
                variant="outlined"
                value={patientData.lastName}
                required
                fullWidth
                autoComplete="off"
                onChange={(e) =>
                  setPatientData({ ...patientData, lastName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StyledDatePicker
                  label="Date of Birth"
                  name="dob"
                  format="MM/DD/YYYY"
                  variant="outlined"
                  color="success"
                  autoComplete="off"
                  value={patientData.dob}
                  onChange={(newValue) =>
                    setPatientData({ ...patientData, dob: newValue })
                  }
                  slotProps={{
                    textField: {
                      required: true,
                    },
                  }}
                  textField={(params) => (
                    <TextField {...params} fullWidth required />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Medical Record Number"
                name="mrn"
                inputProps={{ inputMode: "numeric" }}
                style={{ marginBottom: 10, maxWidth: 246 }}
                color="success"
                value={patientData.mrn}
                variant="outlined"
                fullWidth
                autoComplete="off"
                required
                onChange={(e) => {
                  const re = /^[0-9\b]+$/;
                  if (
                    e.target.value === "" ||
                    (re.test(e.target.value) && e.target.value.length <= 10)
                  ) {
                    setPatientData({ ...patientData, mrn: e.target.value });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Gender"
                variant="outlined"
                fullWidth
                name="Gender"
                style={{ marginBottom: 10, maxWidth: 246, textAlign: "left" }}
                value={patientData.gender}
                required
                autoComplete="off"
                onChange={(e) =>
                  setPatientData({ ...patientData, gender: e.target.value })
                }
              >
                <MenuItem key="Male" value="Male">
                  Male
                </MenuItem>
                <MenuItem key="Female" value="Female">
                  Female
                </MenuItem>
                <MenuItem key="Non-binary" value="Non-binary">
                  Non-binary
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                name="phone"
                inputProps={{ inputMode: "numeric" }}
                style={{ marginBottom: 10, maxWidth: 246 }}
                color="success"
                variant="outlined"
                autoComplete="off"
                fullWidth
                value={patientData.phone}
                required
                onChange={(e) => {
                  const re = /^[0-9\b-]+$/;
                  if (
                    e.target.value === "" ||
                    (re.test(e.target.value) &&
                      e.target.value.replace(/-/g, "").length <= 10)
                  ) {
                    let value = e.target.value.replace(/-/g, "");
                    if (value.length > 3 && value.length <= 6)
                      value = value.slice(0, 3) + "-" + value.slice(3);
                    else if (value.length > 6)
                      value =
                        value.slice(0, 3) +
                        "-" +
                        value.slice(3, 6) +
                        "-" +
                        value.slice(6);
                    setPatientData({ ...patientData, phone: value });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Army Unit"
                name="armyUnit"
                style={{ marginBottom: 30, maxWidth: 246 }}
                color="success"
                variant="outlined"
                fullWidth
                autoComplete="off"
                value={patientData.armyUnit}
                onChange={(e) =>
                  setPatientData({ ...patientData, armyUnit: e.target.value })
                }
                required
              />
            </Grid>
          </Grid>
          <Box display="flex" flexDirection={"column"} justifyContent="center">
            <TextField
              label="History of Present Illness"
              name="hpi"
              style={{ marginBottom: 5, minWidth: 1000 }}
              color="success"
              variant="outlined"
              fullWidth
              required
              value={patientData.hpi}
              multiline
              id="hpi"
              autoComplete="off"
              rows={10}
              onChange={(e) =>
                setPatientData({ ...patientData, hpi: e.target.value })
              }
            />
            <FormHelperText
              id="component-helper-text"
              name="component-helper-text"
            >
              Consider using OPQRSTI:
              <br />
              Onset: "Did your illness/pain start suddenly?" - "What were you
              doing when the pain started?"
              <br />
              Provokes or Palliates: "What makes your condition better or
              worse?"
              <br />
              Quality: "Describe your pain"
              <br />
              Radiates: "Where does it hurt the most?" - "Where does the pain go
              from there?"
              <br />
              Severity: "What would you rate your pain on a scale from 0 to 10?"
              <br />
              Time: "How long ago did your illness/injury begin?"
            </FormHelperText>
          </Box>
          <button
            className="btn btn-primary"
            type="button"
            style={{ marginTop: 30, fontSize: "large" }}
            onClick={handleSubmit}
          >
            BEGIN ALGORITHM
          </button>
          <button
            className="btn btn-danger"
            type="button"
            id="clearButton"
            onClick={handleClear}
          >
            Clear Form
          </button>
        </FormControl>
      </ThemeProvider>
    </>
  );
};

export default Form2;
