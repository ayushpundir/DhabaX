//understanding class based components
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        //creating state variable
        //use this.setState() to update
        this.state = {
            count: 0,
        };
    }
    render(){
        const {name, role, location} = this.props;
        return (
        <div className="about-section">
            <h2>count: {this.state.count}</h2>
            <h2>Name: {name}</h2>
            <h2>role: {role}</h2>
            <h3>Location: {location}</h3>
        </div>
    );
    }
}

export default UserClass;