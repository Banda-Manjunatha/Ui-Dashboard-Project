import React from "react";
import "./Data.css";
import group from "../../Assets/group.png";
import secgroup from "../../Assets/sec-group.png";
import sec2 from "../../Assets/sec2.png";
import sec3 from "../../Assets/sec3.png";
import sec4 from "../../Assets/sec4.png";
import right from "../../Assets/right-arrow.png";
import down from "../../Assets/down-arrow.png";

const Data = () => {
  return (
    <>
      <div className="data-container">
        <div className="w-full bg-white rounded-lg">
          <div className="heading-box">
            <img src={group} alt="" />
            <p>Consultants</p>
          </div>
        </div>
        <div className="filter-container">
          <p>Filters</p>
          <select name="" id="">
            <option value="select range">Select Range</option>
          </select>
          <div className="input-box">
            <input type="radio" id="radio1" />
            <label htmlFor="radio1" className=" cursor-pointer">
              Summary
            </label>
          </div>
          <div className="input-box">
            <input type="radio" id="radio2" />
            <label htmlFor="radio2" className=" cursor-pointer">
              Branch Wise
            </label>
          </div>
        </div>
        <div className="sec-container">
          <div className="sec1 ">
            <div className="left">
              <p className="text-green-600">Consultant Count</p>
              <p className=" text-dark opacity-70 text-xl">90 / 900</p>
              <p className="text-xs text-gray-500">Today / Period</p>
            </div>
            <div className="right">
              <img src={secgroup} alt="secgroup" />
            </div>
          </div>
          <div className="sec1 border-l-4 border-l-blue-200 ">
            <div className="left">
              <p className="text-green-600">Consultations</p>
              <p className=" text-dark opacity-70 text-xl">11 / 25</p>
              <p className="text-xs text-gray-500">Today / Period</p>
            </div>
            <div className="right">
              <img src={sec2} alt="secgroup" />
            </div>
          </div>
          <div className="sec1 border-l-4 border-l-green-200">
            <div className="left">
              <p className="text-green-600">Labs</p>
              <p className=" text-dark opacity-70 text-xl">25 / 560</p>
              <p className="text-xs text-gray-500">Today / Period</p>
            </div>
            <div className="right">
              <img src={sec3} alt="secgroup" />
            </div>
          </div>
          <div className="sec1 border-l-4 border-l-violet-200">
            <div className="left">
              <p className="text-green-600">Diet Plans</p>
              <p className=" text-dark opacity-70 text-xl">25 / 250</p>
              <p className="text-xs text-gray-500">Today / Period</p>
            </div>
            <div className="right">
              <img src={sec4} alt="secgroup" />
            </div>
          </div>
        </div>
        <div className="table-container">
          <div className="table-heading">
            <p>Consultants</p>
            <div className="table-images">
              <img src={right} alt="" />
              <img src={down} alt="" />
            </div>
          </div>
          <div>
            <table className="table">
              <tr>
                <th>Name</th>
                <th>PATIENT COUNT</th>
                <th>LABS</th>
                <th>DIET PLANS</th>
              </tr>
              <tr>
                <td>John Smith</td>
                <td>12</td>
                <td>3</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Jane Doe</td>
                <td>8</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Mark Johnson</td>
                <td>6</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Mary Lee</td>
                <td>10</td>
                <td>4</td>
                <td>8</td>
              </tr>
              <tr>
                <td>David Chen</td>
                <td>14</td>
                <td>5</td>
                <td>9</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
