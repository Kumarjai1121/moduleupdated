import React from "react";


const AddItems = ({ inputText, addItems, userinfo }) => {
  return (
    <div className="div1">
      <input
        type="text"
        placeholder="type task"
        onChange={inputText}
        value={userinfo.newItem}
        style={{ margin: "4px", padding: "10px", windexth: "250px" }}
      />
      <button
        onClick={() => addItems(userinfo.newItem)}
        style={{ padding: "10px" }}
      >
        add
      </button>
    </div>
  );
};

export default AddItems;
