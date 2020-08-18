import React, { Component } from "react";
import { render } from "react-dom";

class A extends React.Component{
render(){
    return <h1>A component - {this.props.title} {this.props.name}</h1>;
  }
}

export default A;
