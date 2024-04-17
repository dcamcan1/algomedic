import React, { useState, useEffect, useCallback, useContext } from "react";
import APIService from "../../components/APIService";
import "./Previous.css";
import { useNavigate } from "react-router";
import { useTable, useSortBy, useFilters, useGlobalFilter } from "react-table";
import dayjs from "dayjs";
import {
  PatientDataContext,
  PrevResponsesContext,
} from "../Algorithm/AlgorithmImports";

const Previous = ({ setDispo, setSelectedSubCategory }) => {
  const [encounters, setEncounters] = useState([]);
  const navigate = useNavigate();
  const { setPatientData } = useContext(PatientDataContext);
  const { setPrevResponses } = useContext(PrevResponsesContext);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setEncounters(resp))
      .catch((error) => console.log(error));
  }, []);

  const deleteEncounter = useCallback(
    (encounter) => {
      const passcode = prompt(
        "Only authorized users can delete encounters. Please enter the passcode:"
      );
      if (passcode === "yourPasscode") {
        if (
          window.confirm(
            "Are you sure you want to delete this encounter permanently?"
          )
        ) {
          APIService.DeleteEncounter(encounter.enc_num).then(() =>
            setEncounters(
              encounters.filter(
                (myencounter) => myencounter.enc_num !== encounter.enc_num
              )
            )
          );
        }
      } else {
        alert("Incorrect passcode. Stay in your lane.");
      }
    },
    [encounters]
  );

  const seeDetails = useCallback(
    (encounter) => {
      setPatientData({
        firstName: encounter.first_name,
        lastName: encounter.last_name,
        gender: encounter.gender,
        mrn: encounter.mrn,
        dob: dayjs(encounter.dob),
        phone: encounter.phone,
        armyUnit: encounter.army_unit,
        hpi: encounter.hpi,
        activity: encounter.activity,
      });
      setDispo(encounter.dispo);
      setPrevResponses(encounter.results);
      setSelectedSubCategory(encounter.cat_selected);
      const date = new Date(encounter.date).toISOString();
      navigate("/details", { state: { date } });
    },
    [
      navigate,
      setDispo,
      setPatientData,
      setPrevResponses,
      setSelectedSubCategory,
    ]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Date / Time",
        accessor: "date",
        Cell: ({ value }) => (
          <div className="date-cell">
            {`${new Date(value).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })} ${new Date(value).toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}`}
          </div>
        ),
      },
      {
        Header: "Name",
        accessor: (d) => `${d.first_name} ${d.last_name}`,
        Cell: ({ value }) => <div className="name-cell">{value}</div>,
      },
      {
        Header: "MRN",
        accessor: "mrn",
      },
      {
        Header: "DOB",
        accessor: "dob",
        Cell: ({ value }) => {
          const date = dayjs(value).format("DD MMM YYYY");
          return <div className="dob-cell">{date}</div>;
        },
      },
      {
        Header: "Algorithm(s)",
        accessor: "cat_selected",
        Cell: ({ value }) => <div className="cat-cell">{value}</div>,
      },
      {
        Header: "Unit",
        accessor: "army_unit",
      },
      {
        Header: "Disposition",
        accessor: "dispo",
        Cell: ({ value }) => <div className="dispo-cell">{value}</div>,
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row: { original } }) => (
          <div className="actions">
            <button
              className="btn btn-primary"
              id="details"
              onClick={() => seeDetails(original)}
            >
              See Details
            </button>
            <br />
            <button
              className="btn btn-danger"
              id="delete"
              onClick={() => deleteEncounter(original)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    [deleteEncounter, seeDetails]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state,
  } = useTable(
    {
      columns,
      data: encounters,
      initialState: { sortBy: [{ id: "date", desc: true }] },
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  return (
    <div>
      <div className="content">
        <span style={{ fontSize: 35, color: "green" }}>
          Previous Encounters
        </span>
        <p />
      </div>
      <div className="row">
        <div
          className="col"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            className="btn btn-success"
            id="homeButton2"
            onClick={() => navigate("/")}
          >
            Return Home
          </button>
        </div>
        <p></p>
      </div>
      <input
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search..."
      />
      <table {...getTableProps()} className="tableWithGrid myTable">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Previous;
