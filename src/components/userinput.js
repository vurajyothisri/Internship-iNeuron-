import React,{useState} from "react";
// import Convert from "./Fetch";
import { useNavigate} from 'react-router-dom';;
const Userinput=()=>{
    const [Amount,updateAmount]=useState(0)
    const [From,updateFrom]=useState("")
    const [To,updateTo]=useState("")  
    // const [Send,UpdateSend]=useState(false)
    const navigation=useNavigate()
    const options=[          
        "Choose",'AFN','AED','ALL','AMD','ANG','AOA',
        'ARS', 'AUD','AWG','AZN', 'BAM', 'BBD',
        'BDT','BGN','BHD','BIF','BMD','BND',
         'BOB','BRL','BSD','BTC','BTN',
        'BWP','BYN','BYR','BZD', 'CAD',
        'CDF','CHF', 'CLF','CLP','CNY',
        'COP','CRC','CUC','CUP', 'CVE',
        'CZK','DJF','DKK','DOP','DZD',
        'EGP','ERN','ETB','EUR', 'FJD',
        'FKP', 'GBP','GEL','GGP','GHS',
        'GIP', 'GMD','GNF','GTQ', 'GYD', 'HKD','HNL','HRK',
        'HTG', 'HUF','IDR', 'ILS','IMP',
        'INR', 'IQD','IRR','ISK','JEF',
        'JMD', 'JOD', 'JYP', 'KES', 'KGS',
        'KHR','KMF','KPW','KTW', 'KWD',
        'KYD', 'KZR', 'LAK','LBP','LKR', 'LRD',
        'LSL', 'LTL', 'LVL','LYD','MAD',
        'MDL', 'MGA','MKD','MMK','MNT','MOP','MRO',
        'MUR','MVR',   'MWK', 'MXN','MYR', 'MZN',
        'NAD','NGN','NIO','NOK','NPR',
        'NZD', 'OMR','PAB','PEN', 'PGK','PHP','PKR',
        'PLN','PYG','QAR','RON','RSD','RUB',
        'RWF','SAR',  'SBD','SCR','SDG', 'SEK',
        'SGD','SHP','SLE','SLL','SOS','SRD','STD','SVC',
        'SYP','SZL','THB','TJS','TMT', 'TND','TOP',
        'TRY', 'TTD','TWD','TZS','UAH','UGX','USD','UYU',
        'UZS', 'VEF','VES','VND', 'VUV', 'WST', 'XAF',
        'XAG','XAU','XCD',  'XDR','XOF','XPF','YER',
        'ZAR','ZMK','ZMW','ZWL'            
     ]
    

   const Clear_Fields=()=>{
    updateAmount("")
    updateFrom("")
    updateTo("")
   }
   
    const Submited=(e)=>{
        e.preventDefault()    
        if(Amount.length===0 ){
            alert("Enter th filed")
            Clear_Fields()
        }
        else{
           const data={
            amount:Amount,
            base:From,
            to:To
           }
           navigation("/Fetch.js",{state:data} )
           Clear_Fields()
        }
        
              
    }
    return(
        <>
        <form>
            <input type="number" placeholder="Enter the amount" value={Amount} onChange={(e)=>{updateAmount(e.target.value)}}/>
            <label>Convert To:</label>
            
            <select value={From} onChange={(e)=>updateFrom(e.target.value)}>
            {
                    options.map((values,index)=>{
                       return <option key={index}>{values}</option>

                    })
                }                                                   
           
            </select>
            <label>Change To:</label>
            <select value={To} onChange={(e)=>updateTo(e.target.value)}>
                {
                    options.map((values,index)=>{
                       return <option key={index}>{values}</option>

                    })
}
            </select>

        </form>
        <button onClick={Submited}>Click</button>
        </>
    )
}
export default Userinput