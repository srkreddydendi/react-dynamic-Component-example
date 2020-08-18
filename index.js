import React, { Component } from "react";
import { render } from "react-dom";
//import Savings from "./Savings";
//import "./styles/style.scss";
import A from "./shared/A";

class App extends Component {
  render() {
    let items = [{ title: "hello", name:"shivaram" }, { title: "hello",name:"arun" }];
    let C = null;
    switch (this.props.id) {
      case 1:
        C = A;
        break;
      case 2:
        C = B;
        break;
      default:
        C = A;
    }

    return (
      <div>
       {items.map((item, index)=>{
    
        return (
          <>
        <span key={index} ><C title={item.title} name={item.name} /></span>
        <span key={index} ><C {...item} /></span>
        </>
        );
    
    })}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
