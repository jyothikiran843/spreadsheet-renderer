// const pEle = (
//   <>
//     <ul>
//       <li>Hiii</li>
//       <li>Hello</li>
//     </ul>
//     <b>Hiiiii</b>
//   </>
// )
// const root=ReactDOM.createRoot(document.getElementById('syn'));
// root.render(pEle);
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Student extends React.Component{
//   render(){
//     return <h1>Hi</h1>;
//   }
// }
// class Class extends React.Component{
//   render(data){
//     return( 
//       <>
//       <p>Nipe</p>
//       <b>This is class Component</b>
//       <Student/>
//       </>
//     );
//   }
// }
// const root=ReactDOM.createRoot(document.getElementById('syn'));
// root.render(<Class/>);
// function Add(props){
//   return <p>the result is {Number(props.a)+Number(props.b)}</p>
// }
// const root=ReactDOM.createRoot(document.getElementById('syn'));
// root.render(<Add a='2' b='3' />);
// function Student(props){
//   return <p>Hi i am {props.prams.name}</p>
// }
// function Class(props){
//     var obj={name:props.name,branch:props.branch};
//     var branch=props.branch;
//     return (
//       <>
//       <b>Branch is {branch}</b>
//       <Student prams={obj} />
//       </>
//     );
// }
// const root=ReactDOM.createRoot(document.getElementById('syn'));

// root.render(<Class name='Kiran' branch='CSE' />)
// import React from "react";
// import {Greet,Bye} from "./greeter";
// import ReactDOM from 'react-dom/client';
// const root=ReactDOM.createRoot(document.getElementById('syn'));
// const details={name:'Kiran',branch:'CSE',year:'E3'};
// function Both(){
//   return (
//     <>
//       <Greet details={details}/>
//       <Bye />
//     </>
//   )
// }
// root.render(<Both />);
// const students=['Kiran','jyothi','baji'];
// function Students(){
//   return(
//     <ul>
//       {students.map((name)=> {return <li>Hi this is {name}</li>})}
//     </ul>
//   )
// }
// const root=ReactDOM.createRoot(document.getElementById('syn'));
// root.render(<Students />)
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { useState } from "react";

// function Form(){
//   const [name,setName]=useState("");
//   function submitted(event){
//     event.preventDefault();
//     alert(`your name is ${name}`);
//   }
//   return (
//     <form onSubmit={submitted}>
//       <label>Enter SomeShit:
//         <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
//       </label>
//     </form>
//   )
// }
// const root=ReactDOM.createRoot(document.getElementById('syn'));
// root.render(<Form />);
// import { useState } from "react";
// import React from "react";
// import ReactDOM from 'react-dom/client';
// function Form(){
//   const[inputs,setInputs]=useState({})
//   function submitted(event){
//     event.preventDefault();
//     alert(inputs.class  );
//   }
//   function changed(event){
//     const name=event.target.name;
//     const value=event.target.value;
//     setInputs((values) =>({...values,[name]:value}));
//   }
//   return(
//     <form onSubmit={submitted}>
//       <input
//         type='text'
//         name='usrname'
//         value={inputs.usrname || ''}
//         onChange={changed}
//       />
//       <input
//         type='number'
//         name='age'
//         value={inputs.age || 0}
//         onChange={changed}
//       />
//       <select 
//         name='class'
//         value={inputs.class}
//         onChange={changed}
//       >
//         <option value="CsE-01">cse-01</option>
//         <option value="CsE-02">cse-01</option>
//         <option value="CsE-03">cse-01</option>
//       </select>
//       <input 
//         type='submit'
//       />
//     </form>
//   )
// }
// const root=ReactDOM.createRoot(document.getElementById('syn'));
// root.render(<Form />);
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { useState } from "react";
// function Form(){
//   const [inputs,setInputs]=useState({});
//   function Changed(event){
//     setInputs((values)=>({...values,[event.target.name]:event.target.value}));
//     if(event.target.value.indexOf('@')===-1){
//       document.body.style.backgroundColor='red';
//     }
//     else{
//       document.body.style.backgroundColor='green';
//     }
//   }
//   function FormSubmitted(event){
//     event.preventDefault();
//     if(inputs.password.indexOf('@')!==-1){
//       alert("Success");
//       return
//     }
//     alert("Failed")
//     return
//   }

//   return(
//     <form onSubmit={FormSubmitted}>
//       <input
//         name='mail'
//         value={inputs.mail || ''}
//         onChange={Changed}
//       />
//       <br/>
//       <input
//       type='password'
//       name='password'
//       value={inputs.password || ''}
//       onChange={Changed}
//       />
//       <br/>
//       <input
//         type='submit'
//       />
//     </form>
//   )
// }
// const root=ReactDOM.createRoot(document.getElementById('syn'));
// root.render(<Form />);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// const arr=[
//   {name:'Kiran',age:20},
//   {name:'jyothi',age:20},
//   {name:'baji',age:20}
// ]
// function Student(props){
//   return <p>Hi i am {props.props.name} and i am {props.props.age}</p>
// }
// function Students(){
//   return(
//     <ul>
//       {arr.map((value)=> <Student props={value} />)}
//     </ul>
//   )
// }
// const root=ReactDOM.createRoot(document.getElementById('syn'));
// root.render(<Students />);
// import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./pages/data";
import Home from './pages/home';
// import Blog from './pages/blog';
// import About from './pages/about';
// import Register from "./pages/register";
// import Error from './pages/error';
import Layout from "./pages/layout";
// import Todo from "./pages/todo";
// import Email from "./pages/email";
// import College from "./pages/college";
import Calculator from "./calculator";
// import { Count } from "./pages/hits";
import Board from "./pages/tictoc";
// import ProductsTable from "./pages/products";
// const todos=[
//   {'key':1,'value':'Have to think'},
//   {'key':2,'value':'Need to Overthink'}
// ]
function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          {/* <Route path='blogs' element={<Blog />}/> */}
          {/* <Route path='todo' element={<Todo props={todos} />}/> */}
          {/* <Route path='email' element={<Email />}/> */}
          {/* <Route path='counter' element={<Count />}/> */}
          <Route path='calculator' element={<Calculator />}/>
          {/* <Route path='college' element={<College />}/> */}
          {/* <Route path='counter' element={<Count />}/> */}
          <Route path='tictoc' element={<Board />}/>
          <Route path='data' element={<Data />}/>
          <Route path='*' element={<h1>Error Page doesn't exist!!!</h1>} />
          {/* <Route path='products' element={<ProductsTable />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
const root=ReactDOM.createRoot(document.getElementById('syn'));
root.render(<App />);