import { Link } from "react-router-dom";
import "./Header.css";
import { PatientDataContext } from "../../components/PatientDataContext";
import { useContext } from "react";

const Header = () => {
  const { setPatientData } = useContext(PatientDataContext);
  const handleLinkClick = (event) => {
    if (
      !window.confirm(
        "Are you sure you want to go to the home page? \n************************\nYou will lose all patient information and data."
      )
    ) {
      event.preventDefault();
    } else {
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
    }
  };

  return (
    <div className="header">
      <Link
        to="/"
        className="title"
        style={{ marginLeft: 25 }}
        onClick={handleLinkClick}
      >
        <img id="algoLogo" src="/logo2.png" alt="ADTMC" />
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
