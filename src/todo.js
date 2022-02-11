import React from "react";
import { useState } from "react/cjs/react.development";

function Todo() {
  let [data, setData] = useState("");
  let [userinfo, setUserInfo] = useState([]);
  let [checkedItems, setCheckedItems] = useState([]);

  function EventHandler(e) {
    setData(e.target.value);
  }

  function listOfItems() {
    setUserInfo([...userinfo, data]);
    setData("");
  }

  const handleDelete = ({ index }) => {
    let lst = [...userinfo];
    lst.splice(index, 1);
    setUserInfo(lst);
  };
  const checkedList = (index) => {
    let lst = [...checkedItems];
    console.log(lst);
    console.log(index);
    console.log(lst.includes(index));
    if (lst.includes(index)) {
      lst.splice(index, 1);
    } else {
      lst.push(index);
    }
    setCheckedItems(lst);
  };

  return (
    <div className="outer">
      <div className="main">
        <div className="div2">
          <ol>
            {userinfo.map((item, index) => (
              <li
                style={{
                  backgroundColor: "blueviolet",
                  color: "black",
                  border: "2px",
                  margin:"4px"
                }}
                key={index}
              >
                <input type="checkbox"style={{height:"auto"}} onClick={() => checkedList(index)} />
                <span
                  style={
                    checkedItems.includes(index)
                      ? { textDecoration: "line-through" }
                      : null
                  }
                >
                  {item}
                </span>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ol>
        </div>

        <div className="div1">
          <input
            type="text"
            placeholder="Type Any Task ...."
            onChange={EventHandler}
            value={data}
            style={{ padding: "10px" }}
          />
          <button onClick={listOfItems} style={{ padding: "10px" }}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
