//understanding class based components

/**
 * when we say that we are loading a class based component on our page
 * it means we are creating an instance of the class
 * when a class is instanciated the constructor is called (basics)
 */
import React from "react";

class UserClass extends React.Component{
    constructor(props){ //constructor are used to receive the props
        super(props);
        //creating state variable
        //use this.setState() to update
        this.state = {
            count: 0,
        };
    }

    //first constructor is called and this render is called and then the component is mounted on the DOM 

    componentDidMount(){
        //componentDidMount is a lifecycle method which is called after the component is mounted
        //best place to make an API call
        //why? because the component is now in the DOM and we can update the state safely
        //it is like useEffect with empty dependency array in functional components
        console.log("component did mount called");
    }
    
    render(){ // class based component is a class which have a method "render" which return some peice of jsx
        const {name, role, location} = this.props;
        const {count}=this.state;
        return (
        <div className="about-section">
            <h2>count: {count}</h2>
            <button onClick={()=>{
                //never update state variables directly
                this.setState({
                    count : this.state.count +1,
                }
                )
            }}>
                update count
            </button>
            <h2>Name: {name}</h2>
            <h2>role: {role}</h2>
            <h3>Location: {location}</h3>
        </div>
    );
    }
}

export default UserClass;