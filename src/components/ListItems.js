import React from "react";
import CheckBox from "./CheckBox";

function ListItems({ userinfo, isChecked, deleteItem }) {
  return (
    <div>
      {userinfo.list.map((item, index) => (
        <li
          style={{
            backgroundColor: "red",
            borderColor: "black",
            border: "2px",
            margin: "4px",
          }}
          key={item.id}
        >
          <CheckBox item={item} checkItem={isChecked} index={index}/>
          <button onClick={() => deleteItem(item.id)}>Delete</button>{" "}
        </li>
      ))}
    </div>
  );
}

export default ListItems;
