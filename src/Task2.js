import React, { useState, useEffect } from "react";

const Task2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/IshaAgrawal09`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
      });
  }, []);

  return (
    <div className="task">
      <table>
        <thead>
          <tr>
            <th>KEY</th>

            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => {
            return (
              <>
                <tr key={key}>
                  <td>{key}: </td>

                  <td>{value}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Task2;
