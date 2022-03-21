import React from "react";
import styles from "./Emp.module.css";

export const Emp = () => {
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState("");
  const [dep, setDep] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [role, setRole] = React.useState("");
  const [salary, setSalary] = React.useState("");



  React.useEffect(() => {
    getData();
    getIT()
    getASC();
    getDSC();
    getMar();
    getFin();
    getHR();
  }, []);

  const getData = () => {
    fetch("http://localhost:3004/Employees")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  const getIT = () => {
    fetch("http://localhost:3004/Employees?department=IT")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  const getFin = () => {
    fetch("http://localhost:3004/Employees?department=Finance")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };


  const getHR = () => {
    fetch("http://localhost:3004/Employees?department=HR")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };


  const getMar= () => {
    fetch("http://localhost:3004/Employees?department=Marketing")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  const getASC = () => {
    fetch("http://localhost:3004/Employees?_sort=salary&_order=asc")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };


  const getDSC = () => {
    fetch("http://localhost:3004/Employees?_sort=salary&_order=desc")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };


  const handleAdd = () => {
    const payload = {
      name: name,
      department: dep,
      gender: gender,
      role: role,
      salary: salary,
    };

    const payloadjson = JSON.stringify(payload);

    fetch("http://localhost:3004/Employees", {
      method: "POST",
      body: payloadjson,
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      getData();
      console.log(res);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <input
        type="text"
        placeholder="Department"
        onChange={(e) => setDep(e.target.value)}
        value={dep}
      />
      <br />
      <input
        type="text"
        placeholder="Gender"
        onChange={(e) => setGender(e.target.value)}
        value={gender}
      />
      <br />
      <input
        type="text"
        placeholder="Role"
        onChange={(e) => setRole(e.target.value)}
        value={role}
      />
      <br />
      <input
        type="text"
        placeholder="Salary"
        onChange={(e) => setSalary(e.target.value)}
        value={salary}
      />
      <br />
      <button onClick={handleAdd}>ADD</button><br />

        <button onClick={getData}>Show All Departments</button>
        <button onClick={getMar}>Show Marketing </button>
        <button onClick={getHR}>Show HR</button>
        <button onClick={getIT}>Show IT</button>
        <button onClick={getFin}>Show Finance</button><br />
        <button onClick={getASC}>Sort By Salary Ascending</button>
        <button onClick={getDSC}>Sort By Salary Descending</button>
         



      {data.map((items) => {
        return (
          <div className={styles.box}>
            <h4>Name: {items.name}</h4>
            <h4>Department: {items.department}</h4>
            <h4>Gender: {items.gender}</h4>
            <h4>Role: {items.role}</h4>
            <h4>Salary: {items.salary}</h4>
          </div>
        );
      })}
    </div>
  );
};
