import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";




let curDate=new Date();
curDate=curDate.getHours();
let greeting='';
const cssStyle={};


if(curDate>=5 && curDate<12){
  greeting ='Good Morning';
  cssStyle.color="green";
}else if(curDate>=12 && curDate<17){
  greeting="Good Afternoon";
  cssStyle.color="orange";
}else if(curDate>=17 && curDate<21){
  greeting="Good Evening";
  cssStyle.color="blue";

}else{
  greeting="Good Night";
  cssStyle.color="black";
}

ReactDOM.render(
  <>
  <div>
  <h1>Hello Sir,<span style={cssStyle} >{greeting}</span></h1></div>  </>,document.getElementById("root")

  
  
);

