import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './App.css'
import { useState } from 'react';

function App() {


  const [Principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest,setInterest] = useState(0)
  const [isPrincipleInputValid,setIsPrincipleInputValid] = useState(false)
  const [isYearInputValid,setIsYearInputValid] = useState(false)
  const [isRateInputValid,setIsRateInputValid] = useState(false)

  const handleValidation=(tag)=>{
    const {name,value} = tag
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));

    if(!!value.match(/^[0-9]*.?\d+$/)){
      //valid

      if(name=="principle"){
        setPrinciple(value)
        setIsPrincipleInputValid(false)
      }
      else if(name =="year"){
        setYear(value)
        setIsYearInputValid(false)
      }else{
        setRate(value)
        setIsRateInputValid(false)
      }
    }

    else{
      if(name=="principle"){
        setPrinciple(value)
        setIsPrincipleInputValid(true)
      }
      else if(name=="year"){
        setYear(value)
        setIsYearInputValid(true)
      }
      else{
        setRate(value)
        setIsRateInputValid(true)
      }
    }
    
    
  }
 
  const handleCalculate=(e)=>{
    e.preventDefault()
    setInterest((Principle*rate*year)/100)

  }

  const handleReset=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setInterest("")
    setIsPrincipleInputValid(false)
    setIsYearInputValid(false)
    setIsRateInputValid(false)


  }

  return (
    <>
      <div style={{minHeight:"100vh",width:"100%"}} className="d-flex justify-content-center align-items-center bg-primary">
        <div className="box bg-info p-5 rounded">
          <h2 className='text-danger fw-bolder' style={{textDecoration:"underline"}}>Simple Interest Calculator</h2>
          <p className='text-center'>Calculate your simple interest with us</p>
          <div className="d-flex justify-content-center align-items-center p-5 rounded bg-warning">
            <h1 className='text-danger'>&#8377;{interest}</h1>
          </div>
          <div className="mt-5">
          <form className='border rounded p-3 d-flex flex-column'>


          {isPrincipleInputValid&&<div className="mb-2 text-danger fw-bolder">*Invalid Input</div>}
          <TextField id="principle" value={Principle} name='principle' label="Principle Amount" variant="outlined" onChange={e=>handleValidation(e.target)}/>


        {isYearInputValid&&<div className="mb-2 text-danger fw-bolder">*Invalid Input</div>}
          <TextField id="year" value={year} name='year' label="Year" variant="filled" onChange={e=>handleValidation(e.target)}/>


          {isRateInputValid&&<div className="mb-2 text-danger fw-bolder">*Invalid Input</div>}
          <TextField id="rate" value={rate} name='rate' label="Rate of Interest" variant="standard" onChange={e=>handleValidation(e.target)}/>


          </form>
        </div>
        

          <div className="mt-3 d-flex justify-content-between">
            <Button variant="contained" type='submit' onClick={handleCalculate}>Calculate</Button>
            <Button variant="outlined" onClick={handleReset}>Reset</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
