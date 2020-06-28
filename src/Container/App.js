import React, {Component} from 'react';
import './App.css';
import Person from '../Components/Persons/Person/Person';
import styled from "styled-components";
import Persons from "../Components/Persons/Persons";
import cockpit from "../Components/Cockpit/cockpit";

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

class App extends Component {
    state = {
        persons: [
            {id: "asaf1", name: "Sahil", age: 25},
            {id : "asaf2", name: "Tanmay", age: 26},
            {id : "asaf3", name: "Tanvi", age: 29},
        ],
        showPersons : false,
    }
    nameChangedHandle = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState(
            {persons : persons}
        )
    }

    handlePersonsChange = () => {
        const doesShow = this.state.showPersons;
      this.setState  ({
          showPersons : !doesShow,
      })
    }

    deletePersons = (personIndex) =>{
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons : persons});
    }

    render() {


        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    <Persons
                    persons = {this.state.persons}
                    clicked = {this.deletePersons}
                    changed = {this.nameChangedHandle}
                    />
                </div>
            );


        }

        const classes = [];
        if(this.state.persons.length <=2){
            classes.push("red");
        }
        if(this.state.persons.length <=1){
            classes.push("bold");
        }

        return (

            <div className="App">
                <cockpit
                showPersons = {this.state.showPersons}
                persons = {this.state.persons}
                />
                {persons}


            </div>

        );
    }
}

export default App;
