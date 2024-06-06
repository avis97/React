import { Button } from "bootstrap";
import React from "react";

function HomePage() {
  return (
    <div style={{ textAlign: "center" }}>
      <table
        className="table"
        style={{
          border: "1px solid black",
          width: "80%",
          margin: "auto",
          marginTop: "100px", // Add margin auto for centering
        }}
      >
        <thead style={{ border: "1px solid black" }}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Jobs</th>
          </tr>
        </thead>
        <tbody>
          {[1, 1, 1].map((item) => (
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
