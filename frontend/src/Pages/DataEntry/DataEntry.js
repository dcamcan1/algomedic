import "./DataEntry.css";
import Form2 from "../../components/Form2";
import { useNavigate } from "react-router";

const DataEntry = ({ setDispo, setSelectedSubCategory }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        <span style={{ fontSize: 40, color: "green" }}>
          Patient Information
        </span>
        <br />
        <Form2
          setDispo={setDispo}
          setSelectedSubCategory={setSelectedSubCategory}
        />
        <button
          className="btn btn-secondary"
          id="homeButton"
          onClick={() => navigate("/")}
        >
          Return Home
        </button>
      </div>
    </>
  );
};

export default DataEntry;
