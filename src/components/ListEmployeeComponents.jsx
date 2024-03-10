import React from "react";

function ListEmployeeComponents() {
  const dummyData = [
    {
      id: 1,
      firstName: "Ayoub",
      lastName: "Boukhari",
      email: "ayoubbou@gmail.com",
    },
    {
      id: 2,
      firstName: "Sofia",
      lastName: "Rossi",
      email: "sofiarossi@yahoo.it",
    },
    {
      id: 3,
      firstName: "Lucas",
      lastName: "Hernandez",
      email: "lucasher@hotmail.com",
    },
  ];
  return (
    <div>
      <h2>List of Employees</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default ListEmployeeComponents;
