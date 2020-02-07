import React from 'react';

class Welcome extends React.Component {

    render() {

      var x = this.props.name + "X";

      console.log(this.props.title);

      return <div style={{border: "1px solid"}}>
        <h1>Hello, {this.props.name}</h1>
        <h2>{x}</h2>
        <h2>{this.props.description}</h2>
      </div>;
    }
  }

  export default Welcome;