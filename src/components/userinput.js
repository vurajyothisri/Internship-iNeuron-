import React,{useState} from "react";
import Convert from "./Fetch";

const Userinput=()=>{
    const [Amount,updateAmount]=useState(0)
    const [From,updateFrom]=useState("INR")
    const [To,updateTo]=useState("INR")  
    const [Send,UpdateSend]=useState(false)
    const options=[          
        'AFN',
        'AED',
        'ALL',
        'AMD',
        'ANG',
        'AOA',
        'ARS',
        'AUD',
        'AWG',
        'AZN',
        'BAM', 'BBD','BDT','BGN','BHD','BIF','BMD','BND', 'BOB','BRL','BSD','BTC','BTN',
        'BWP',
        'BYN',
        'BYR',
        'BZD',
        'CAD',
        'CDF',
        'CHF',
        'CLF',
        'CLP',
        'CNY',
        'COP',
        'CRC',
        'CUC',
        'CUP',
        'CVE',
        'CZK',
        'DJF',
        'DKK',
        'DOP',
        'DZD',
        'EGP',
        'ERN',
        'ETB','EUR',
        'FJD',
        'FKP',
        'GBP',
        'GEL',
        'GGP',
        'GHS',
        'GIP',
        'GMD',
        'GNF',
        'GTQ',
        'GYD',
        'HKD',
        'HNL',
        'HRK',
        'HTG',
        'HUF',
        'IDR',
        'ILS',
        'IMP',
        'INR',
        'IQD',
        'IRR',
        'ISK',
        'JEF','JMD', 'JOD', 'JYP', 'KES', 'KGS','KHR','KMF','KPW',
        'KTW', 'KWD',
        'KYD', 'KZR', 'LAK','LBP',
        'LKR', 'LRD',
        'LSL', 'LTL',
        'LVL',
        'LYD',
        'MAD',
        'MDL',
        'MGA',
        'MKD',
        'MMK',
        'MNT',
        'MOP',
        'MRO',
        'MUR','MVR',
        'MWK',
        'MXN',
        'MYR',
        'MZN',
        'NAD',
        'NGN','NIO',
        'NOK','NPR',
        'NZD', 'OMR',
        'PAB',
        'PEN',
        'PGK',
        'PHP',
        'PKR',
        'PLN',
        'PYG',
        'QAR',
        'RON',
        'RSD',
        'RUB',
        'RWF',
        'SAR',
        'SBD',
        'SCR',
        'SDG',
        'SEK',
        'SGD',
        'SHP',
        'SLE',
        'SLL','SOS','SRD',
        'STD',
        'SVC',
        'SYP',
        'SZL',
        'THB',
        'TJS',
        'TMT',
        'TND',
        'TOP',
        'TRY', 'TTD','TWD','TZS','UAH','UGX','USD','UYU',
'UZS', 'VEF','VES','VND', 'VUV',
        'WST', 'XAF',
        'XAG',
        'XAU','XCD',
        'XDR','XOF',
        'XPF','YER',
        'ZAR',
        'ZMK','ZMW',
        'ZWL'            
     ]
    //to send by onclick
    const [amount,Sendamount]=useState(0)
    const [from,Sendfrom]=useState("")
    const [to,Sendto]=useState("")
    

   const Clear_Fields=()=>{
    updateAmount("")
    updateFrom("")
    updateTo("")
   }
   
    const Submited=(e)=>{
        e.preventDefault()
        UpdateSend(true)
        
        if(Amount.length===0 ){
            UpdateSend(false)
            alert("Enter th filed")
            Clear_Fields()
        }
        else{
             Sendamount(Amount);
             Sendfrom(From)
             Sendto(To)
             
           UpdateSend(true)
           Clear_Fields()
        }
        
              
    }
    return(
        <>
        <form>
            <input type="number" placeholder="Enter the amount" value={Amount} onClick={Clear_Fields}onChange={(e)=>{updateAmount(e.target.value)}}/>
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
                             
                                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
        
                */}
            </select>

        </form>
        <button onClick={Submited}>Click</button>
        {
            Send?
            <Convert amount={amount} base={from} to={to}/>
            :
            ""
        }
        </>
    )
}
export default Userinput