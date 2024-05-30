import React, { useState } from "react";

function EmployeeForm() {

    let [employees, setEmployees] = useState([]);

  let getEmployeeFromServer = async () => {
   

    let reqOptions = {
      method: "GET",
    };

    let dataStore = await fetch("http://localhost:9441/employees", reqOptions);
    let dataConvert = await dataStore.json();
    setEmployees(dataConvert);
    console.log(dataConvert);
  };


  let getEmployeeFromServer2 = async () => {
   

    let reqOptions = {
      method: "GET",
    };

    let dataStore = await fetch("http://localhost:9441/employee", reqOptions);
    let dataConvert = await dataStore.json();
    setEmployees(dataConvert);
    console.log(dataConvert);
  };


  
  let getEmployeeFromServer3 = async () => {
   

    let reqOptions = {
      method: "GET",
    };

    let dataStore = await fetch("http://localhost:9441/employe", reqOptions);
    let dataConvert = await dataStore.json();
    setEmployees(dataConvert);
    console.log(dataConvert);
  };


  let getEmployeeFromServer4 = async () => {
   

    let reqOptions = {
      method: "GET",
    };

    let dataStore = await fetch("http://localhost:9441/employ", reqOptions);
    let dataConvert = await dataStore.json();
    setEmployees(dataConvert);
    console.log(dataConvert);
  };

  
  let getEmployeeFromServer5 = async () => {
   

    let reqOptions = {
      method: "GET",
    };

    let dataStore = await fetch("http://localhost:9441/emplo", reqOptions);
    let dataConvert = await dataStore.json();
    setEmployees(dataConvert);
    console.log(dataConvert);
  };

  let getEmployeeFromServer6 = async () => {
   

    let reqOptions = {
      method: "GET",
    };

    let dataStore = await fetch("http://localhost:9441/empl", reqOptions);
    let dataConvert = await dataStore.json();
    setEmployees(dataConvert);
    console.log(dataConvert);
  };
  return (
    <div>
      <button type="button"
        onClick={() => {
          getEmployeeFromServer2();
        }}
      >
        Get limit/skip
      </button>

      <button type="button"
        onClick={() => {
          getEmployeeFromServer();
        }}
      >
        Get Data
      </button>

      <button type="button"
        onClick={() => {
          getEmployeeFromServer3();
        }}
      >
        And
      </button>

      <button type="button"
        onClick={() => {
          getEmployeeFromServer4();
        }}
      >
        Or
      </button>

      <button type="button"
        onClick={() => {
          getEmployeeFromServer5();
        }}
      >
        Sort
      </button>

      <button type="button"
        onClick={() => {
          getEmployeeFromServer6();
        }}
      >
        Select
      </button>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Country</th>
            <th>ProfilePic</th>
            <th>salary</th>
          </tr>
        </thead>
        
        <tbody>
      {employees.map((ele, i) => {
        return(
        <tr key={i}>
             <td>{i + 1}</td>
             <td>{ele.id}</td>
              <td>{ele.firstName}</td>
              <td>{ele.lastName}</td>
              <td>{ele.email}</td>
              <td>{ele.gender}</td>
              <td>{ele.country}</td>
              <td>
                <img src={ele.profilePic} alt="Profile" width="50" />
              </td>
              <td>{ele.salary}</td>
        </tr>
        )
      })}
      </tbody>
        </table>
    </div>
  );
}

export default EmployeeForm;
