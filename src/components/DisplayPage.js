import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
const Display=()=>{
   let localStore=localStorage.getItem("todos");
   if(localStorage!=null)
   {
       var arr=JSON.parse(localStorage.getItem("todos"))
   }
   else
   {
       alert("no task")
   }
    return(
        <div>
        {console.log(localStore)}
        <table className="table" 
        id="table">
        <tbody>
        <tr >
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">From</th>
        <th scope="col">To</th>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
        </tr>
        {arr.map((item,index)=>{
            if(index!=0){
            return(
                <tr>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.fromPlace}</td>
                <td>{item.to}</td>
                <td>{item.time}</td>
                <td>{item.date}</td>
                </tr>
            )
            }
        })}
        </tbody>
        </table>
        </div>
    )
}
export default Display