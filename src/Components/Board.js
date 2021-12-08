import React,{useState} from "react";
import Square from "./Square";
import Blue from "../sounds/blue.mp3";
const Board = ({squares,onClick}) => {
  const [boolean,setBoolean] = useState(false);

  var page = document.body;

  const animateIt = (i) => {

    var audio = new Audio(Blue);
    audio.play();
   var element = document.getElementsByTagName("p")[i];

   var remove = boolean ? "true" : "false";


        setTimeout(() =>{
          if(element.textContent==="X"){
          page.classList.add("page");
         element.classList.add("animatexX");
         setBoolean(!boolean);}
         else{
             element.classList.add("animatexO");
             page.classList.remove("page");

         }
       },10);



  if(remove){
     element.classList.remove("animatexX");
     element.classList.remove("animatexO");

 }


};
return(
  <div className="board" >
   {squares.map((square,i) => {

    return  <Square key={i} value={square} onClick={() => {onClick(i);animateIt(i)}} />
   })}
   </div>);
};

export default Board;
