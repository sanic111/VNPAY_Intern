import React, {useState, useEffect, Children } from "react";

const[state, setState] = useState(0);
const[count, setCount] = useState(0);

function XinChao(props) {
    return <h1>Hello, {props.name}</h1>;


}

function TamBiet (props){
    return <div>ByeBye, {props.nice}</div>
}


const Button = ({ onclick, children}) => {
    <button onClick ={onclick}> {children}</button>
}
 useEffect(()=>{
    window.addEventListener("scroll", () => {});

const App = () => {
    const onClick = () => alert ("Hiiiiii");
    return () =>{
        window.removeEventListener("scroll",() => {});
    <div>
    <Button onClick ={onClick} >CLick meeeeee!</Button>
    <button onClick ={() => setCount(count +1)}> TăngTăng</button>
</div>
    } ;

},[]);

