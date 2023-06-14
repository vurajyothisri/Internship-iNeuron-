import React, { useEffect,useState } from "react";
import axios from "axios";


const Convert=({amount,base,to})=>{
    const [Details,UpdateDetails]=useState()
    // const accesskey='63413cafe4c3933e28d013252437e862';
 console.log(amount)
 console.log(to)
 console.log(base)
useEffect(()=>{
  const FetchDetails=async()=>{
    try{
      const response=await axios(`https://v6.exchangerate-api.com/v6/1a4c323ad5d373fce5cd69c2/pair/${base}/${to}/${amount}`)
      console.log(response.data.conversion_result)
      if(response.success===false){
        alert("Failed to convert")
      }
     else{
           UpdateDetails(response.data.conversion_result)
     }
    }
    catch{
      console.log("Somthing is wrong with network")
    }
  }

    if(amount.length!==0){
        FetchDetails()
    }
},[amount,base,to])
return(
  <>
  <p>{Details}</p>
  </>
)

}
export default Convert