import { useState } from "react";
export default function Calculator(){
    const [input,setInput]=useState('');
    const [output,setOutput]=useState('');
    return(
        <>
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <input
                    className="form-control"
                    type='text'
                    value={input}
                    onChange={(e)=>{setInput(e.target.value)}}
                    />
                    <div>
                        <button className="btn btn-warning" onClick={(e)=>setInput(input.slice(0,e.target.value-1))}>X</button>
                        <button className="btn btn-danger" onClick={()=>{setInput('');setOutput('')}}>Clear All</button>
                    </div>
                </div>
                <div className="col-md-2">
                    <p>{output}</p> 
                </div>
                <div className="col-md-2">
                    
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+1)}>1</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+2)}>2</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+3)}>3</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+'+')}>+</button>
                </div>
                <div className="col-md-4">

                </div>
            </div>
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+4)}>4</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+5)}>5</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+6)}>6</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+'-')}>-</button>
                </div>
                <div className="col-md-4">
                    
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+7)}>7</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+8)}>8</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+9)}>9</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+0)}>0</button>
                </div>
                <div className="col-md-4">
                    
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+'*')}>*</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+'/')}>/</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={()=>setInput(input+'%')}>%</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-success" onClick={()=>setOutput(eval(input))}>=</button>
                </div>
                <div className="col-md-4">
                    
                </div>
            </div>
        </>
    )
}