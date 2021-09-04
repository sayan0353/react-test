import React,{useState,useEffect} from "react"
import "../styles.css"
import Axios from "axios"
const SignPage=()=>{
   const[values,setValues]=useState({
    name:"",
    phone:"",
    fromPlace:"",
    to:"",
    timePick:"",
    datePick:""
   })
   const[todos,setTodos]=useState([{
    name:"",
    phone:"",
    fromPlace:"",
    to:"",
    timePick:"",
    datePick:"",
    error:""
   }])
    useEffect(()=>{
        const localTodos=localStorage.getItem("todos");
        console.log("print"+localStorage);
        if(localTodos)
        {
            setTodos(JSON.parse(localTodos))
        }
    },[])
    const handleSubmit=e=>{
       //e.preventDefault();
   // console.log(e.target.value)
    const name=document.getElementById("inputUserame")
    const phone=document.getElementById("inputEmail")
    const fromPlace=document.getElementById("inputPassword")
    const to=document.getElementById("inputConfirmPassword")
    const date=document.getElementById("pickupTime")
    const time=document.getElementById("pickupDate")
    const checkLength=Array.from(phone.value).length
   /* console.log(name.value);
    console.log(phone.value);
    console.log(checkLength);
    console.log(fromPlace.value);
    console.log(to.value);
    console.log(date.value);
    console.log(time.value);*/
    checkLength===10 ? alert("successfully filled"): alert("unsuccessful")
    (checkLength===10)
    {
    setTodos([...todos,
    {name:name.value,
    phone:phone.value,
    fromPlace:fromPlace.value,
    to:to.value,
    date:date.value,
    time:time.value}])
    setValues({
      name:name.value,
      phone:phone.value,
      fromPlace:fromPlace.value,
      to:to.value,
      date:date.value,
      time:time.value
    })
    Axios.post('http://localhost:3002/create',values)
    .then(()=>console.log("form created succesfully"))
    .catch(err=>console.log(err))
    }
  }
    useEffect(()=>{
        const localT=localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    return(
    <div className="container">
    <div className="row">
      <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card card-signin flex-row my-5">
          <div className="card-img-left d-none d-md-flex">
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Register</h5>
            <form className="form-signin"
            action="http://localhost:3002/create"
            method="post"
            onSubmit={handleSubmit}
            >
              <div className="form-label-group"
              >
                <input type="text"              
                id="inputUserame"
                 className="form-control" 
                name="username"
                 
                />
                <label htmlFor="inputUserame">Name</label>
              </div>
                  
              <div className="form-label-group">
                <input type="number" 
                 name="phone"
                id="inputEmail" 
                className="form-control" 
                 required/>
                <label htmlFor="inputEmail">Phone Number</label>
              </div>
              
              <hr/>

              <div className="form-label-group">
                <textarea type="text" 
               // placeholder="From"
               name="from"             
                id="inputPassword" 
                className="form-control" 
                
                 required/>
                <label htmlFor="inputPassword">From</label>
              </div>
              
              <div className="form-label-group">
                <textarea type="text" 
               
               
                id="inputConfirmPassword" 
                className="form-control" 
                name="to"
                 required/>
                <label htmlFor="inputConfirmPassword">To</label>
              </div>

              <hr/>
              <div className="form-label-group">
              <input type="date" 
              name="date"
              id="pickupTime"
              className="form-control" 
               ></input>
              <label htmlFor="pickupTime">PickupDate</label>
            </div>

            <div className="form-label-group">
              <input type="time" 
              name="time"
              id="pickupDate" 
              className="form-control" 
              ></input>
              <label htmlFor="pickupTime">
              PickupTime
              </label>
            </div>
               
              <button className="btn btn-lg btn-primary btn-block text-uppercase" 
  
              type="submit">Submit</button>
              <br/>
              <br/>
              <button 
              id="addBtn"
              className="btn btn-lg btn-primary btn-block text-uppercase" 
               
              >
              <a href="/add">
              Display
              </a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}
export default SignPage