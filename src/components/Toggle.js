import React,{useState} from "react";

function Toggle() {
  const[isOn,setItOn]=useState(false)
  return <button>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
