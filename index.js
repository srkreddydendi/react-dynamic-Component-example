import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOMServer from 'react-dom/server';
//import Savings from "./Savings";
//import "./styles/style.scss";
import A from "./shared/A";
import B from "./shared/B";

class App extends Component {

  render() {
    let items = [{ title: "hello", name:"shivaram" }, { title: "hello",name:"arun" }];
    let C = null;
    switch (2) {
      case 1:
        C = A;
        break;
      case 2:
        C = B;
        break;
      default:
        C = A; 
    }
    let element = '<a href="title" >click</B>'
    let output = ReactDOMServer.renderToStaticMarkup(element)

let x = `<h3>hello ${C}</h3>`;
  let arr = [`<h2>abcd</h2> ${C}`, '<h4>abcd</h4>'];
    
let y =React.createElement('h1', {}, x);

    return (
      <div>
       {items.map((item, index)=>{
    
        return (
          <>
          
          <div dangerouslySetInnerHTML={{__html: element }} >
          
          </div>
          
        
        </>
        );
    
    })}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
