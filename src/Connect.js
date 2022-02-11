import React from 'react';
import { useState } from 'react/cjs/react.development';

function Connect() {
 
  let[data,setData]=useState("")

  let [db , setDb]=useState([])
  setData(Database)
  
  let Userlist = [

    {
      id: 1,
      name: 'Deepak',
      technoloy: 'react'
    },
    {
      id: 2,
      name: 'Kamlesh',
      technoloy: 'fultter'
    },
    {
      id: 3,
      name: 'Kartik',
      technoloy: 'hacking'
    }
    ,
    {
      id: 4,
      name: 'Divyanshu',
      technoloy: 'Angular'
    }
]
function EventHandler(e) {
  setData(e.target.value);
}
const Database = db.filter((item)=>{
  return( item.name.toLowercase().include(data.toLowercase()));
})
  return <div>
    <input type="text"placeholder='Enter name...' onChange={EventHandler}/>
  <table border="4">

<tr>
  <td>User ID</td>
  <td>Name</td>
  <td> Technology</td>
</tr>


{
  Database.map((item)=>
  
  <tr>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.technoloy}</td>


  </tr>
  
  
  
  )
}













  </table>
  </div>;
}

export default Connect;
