import React from "react";
import "./style.css";
import styled from "styled-components";

const cockpit = (props) => {

    const StyledButtons = styled.button`
      background-color:${props => props.alt ? 'red' : 'green'};
            color : white;
            font : inherit;
            border: 1px solid blue;
            padding : 8px;
            cursor: pointer;
            &:hover {
                backgroundColor: lightgreen;
                color:black;
`;

    const classes = [];
    if(props.persons.length <=2){
        classes.push("red");
    }
    if(props.persons.length <=1){
        classes.push("bold");
    }

    return(
        <div>
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(' ')}>Is it working?</p>
        <StyledButtons  alt = {this.state.showPersons} onClick={this.handlePersonsChange}>Switch Name</StyledButtons>
        </div>
    )
}

export default cockpit;
