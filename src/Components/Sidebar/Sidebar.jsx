import React, { useState } from "react";
import "./Sidebar.css";
import account from "../../Assets/account.png";
import db from "../../Assets/database.png";
import lab from "../../Assets/lab.png";
import store from "../../Assets/store.png";
import reg from "../../Assets/registration.png";
import file from "../../Assets/file.png";
import tests from "../../Assets/tests.png";
import bill from "../../Assets/billing.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(2);
  const selecOption = (optionNum) => {
    setSelectedOption(optionNum);
  };

  return (
    <>
      <div className="side-container">
        <div className="dashboard-container">
          <p>Dashboards</p>
          <ul>
            <li
              onClick={() => selecOption(1)}
              className={selectedOption === 1 ? "selected" : ""}
            >
              <img src={account} alt="" />
              Patients
            </li>
            <li
              onClick={() => selecOption(2)}
              className={selectedOption === 2 ? "selected" : ""}
            >
              <img src={db} alt="" />
              HR
            </li>
            <li
              onClick={() => selecOption(3)}
              className={selectedOption === 3 ? "selected" : ""}
            >
              <img src={lab} alt="" />
              Labs
            </li>
            <li
              onClick={() => selecOption(4)}
              className={selectedOption === 4 ? "selected" : ""}
            >
              <img src={store} alt="" />
              Pahrma
            </li>
          </ul>
        </div>
        <div className="dashboard-container">
          <p>Processes</p>
          <ul>
            <li
              onClick={() => selecOption(5)}
              className={selectedOption === 5 ? "selected" : ""}
            >
              <img src={reg} alt="" />
              Registration
            </li>
            <li
              onClick={() => selecOption(6)}
              className={selectedOption === 6 ? "selected" : ""}
            >
              <img src={file} alt="" />
              Consultation
            </li>
            <li
              onClick={() => selecOption(7)}
              className={selectedOption === 7 ? "selected" : ""}
            >
              <img src={tests} alt="" />
              Tests & Reports
            </li>
            <li
              onClick={() => selecOption(8)}
              className={selectedOption === 8 ? "selected" : ""}
            >
              <img src={bill} alt="" />
              Billing
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
