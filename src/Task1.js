import React, { useEffect, useState } from "react";

const Task1 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
      });
  }, []);
  return (
    <div className="task1">
      <table>
        <thead>
          <tr>
            <th>User_ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Task1;
