import React, { Component } from "react";
import { render } from "react-dom";

export class B extends React.Component{
	render(){
    return <h1>B component - {this.props.title} {this.props.name}</h1>;
  }
}

export default B;