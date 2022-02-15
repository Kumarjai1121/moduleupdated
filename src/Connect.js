import React from "react";
import { useState } from "react/cjs/react.development";
import ListItems from "./components/ListItems";
import AddItems from "./components/AddItems ";


function Connect() {
  let [userinfo, setUserInfo] = useState({ newItem: "", list: [] });

  function EventHandler(e) {
    setUserInfo({ ...userinfo, newItem: e.target.value });
  }

  const addItems = (newValue) => {
    if (userinfo.newItem !== "") {
      const inpTxt = {
        id: Date.now(),
        valuee: newValue,
        isDone: false,
      };
      const list = [...userinfo.list];
      list.push(inpTxt);
      setUserInfo({ newItem: "", list });
    }
  };

  const handleDelete = (id) => {
    let lst = [...userinfo.list];
    const updatedList = lst.filter((item) => item.id !== id);
    setUserInfo({
      ...userinfo,
      list: updatedList,
    });
  };

  const isChecked = (item, index) => {
    if (userinfo.list[index].id === item.id) {
      userinfo.list[index] = {
        ...userinfo.list[index],
        isDone: !userinfo.list[index].isDone,
      };
    }
    setUserInfo({ ...userinfo, list: [...userinfo.list] });
  };

  return (
    <div className="outer">
      <div className="main">
        <div className="div2">
          <ol>
            {
              <ListItems
                userinfo={userinfo}
                isChecked={isChecked}
                deleteItem={handleDelete}
              />
            }
          </ol>
        </div>
        <AddItems inputText={EventHandler} addItems={addItems} userinfo={userinfo}/>
      </div>
    </div>
  );
}

export default Connect;
