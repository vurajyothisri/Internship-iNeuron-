
import React,{useState,useEffect} from "react";
import axios from "axios";
import { useLocation,useNavigate } from 'react-router-dom';
import getSymbolFromCurrency from 'currency-symbol-map'


const Convert=()=>{
    const [Details,UpdateDetails]=useState()
    // const accesskey='63413cafe4c3933e28d013252437e862'; {amount,base,to}
    const location = useLocation();
    const navigation=useNavigate();
    const data=location.state
    const AMOUNT=data.amount
    const BASE=data.base
    const TO=data.to
const Goback=()=>{
  
  navigation(-1)
}
useEffect(()=>{
  const FetchDetails=async()=>{
    try{
      const response=await axios(`https://v6.exchangerate-api.com/v6/1a4c323ad5d373fce5cd69c2/pair/${BASE}/${TO}/${AMOUNT}`)
      console.log(response.data.conversion_result)
      if(response.success===false){
        alert("Failed to convert")
      }
     else{
           UpdateDetails(response.data.conversion_result+getSymbolFromCurrency(TO))
     }
    }
    catch{
      console.log("Somthing is wrong with network")
    }
  }

    if(AMOUNT.length!==0){
        FetchDetails()
    }
},[AMOUNT,BASE,TO])
return(
  <>
  {/* <p>{Details}</p> */}
  <div>
      <h1>Target Page</h1>
      <h2>Converted To:</h2>
      <p>{Details}</p>
      <button onClick={Goback}>Go to home page</button>
    </div>
  </>
)

}
export default Convert