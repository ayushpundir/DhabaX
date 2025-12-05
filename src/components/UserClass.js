//understanding class based components

/**
 * when we say that we are loading a class based component on our page
 * it means we are creating an instance of the class
 * when a class is instanciated the constructor is called (basics)
 */
import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component{
    constructor(props){ //constructor are used to receive the props
        super(props);
        //creating state variable
        //use this.setState() to update
        this.state = { 
            count : 0,
            name: "default name",
            location: "default location",
            bio: "default bio",
        };
    }

    //first constructor is called and this render is called and then the component is mounted on the DOM 

    async componentDidMount(){
        //componentDidMount is a lifecycle method which is called after the component is mounted
        //best place to make an API call
        //why? because the component is now in the DOM and we can update the state safely
        //it is like useEffect with empty dependency array in functional components
        //console.log("component did mount called");

        const data = await fetch("https://api.github.com/users/ayushpundir");
        const json = await data.json();
        console.log(json);
        this.setState({
           name : json.name,
           location : json.location, 
           bio: json.bio,
        });

    }

    componentWillUnmount(){
        //cleanup work goes here
        //like removing event listeners, setInterval, cancelling network requests etc
        console.log("component will unmount called");
    }
    
    render(){ // class based component is a class which have a method "render" which return some peice of jsx
        const {count, name, role, location, bio} = this.state;
        return (
        <div className="about-section m-4 p-4 border border-gray-400 rounded-lg bg-gray-100 hover:bg-gray-200">
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
            <h1>Profile Information (fetching from API)</h1>
            <h2>Name: {name}</h2>
            <h2>role: {role}</h2>
            <h3>Location: {location}</h3>
            <h3>Bio: {bio}</h3>
            {/* consuming context in class based component here we can't use hooks*/}
            <UserContext.Consumer>
                {(data) => (
                    <h4>current loggedInUser :  {data.loggedInUser}</h4>
                )}
            </UserContext.Consumer>
        </div>
    );
    }
}

export default UserClass;


/**
 * Lifecycle methods in class based components
 * 
 * 1. constructor() - called when the component is created
 * 2. render() - called to render the component
 * 3. componentDidMount() - called after the component is mounted on the DOM
 * first the dummy data is shown and then the real data is shown after the API call is made
 */

/**
 * explain render phase and commit phase of react
 * 
 * Render Phase:
 * - In the render phase, React creates a virtual representation of the UI based on the current state and props.
 * - It determines what changes need to be made to the actual DOM by comparing the new virtual DOM with the previous one (this process is called reconciliation).
 * - The render phase is pure and side-effect free, meaning it should not modify the DOM or perform any operations that affect the outside world.
 * 
 * Commit Phase:
 * - In the commit phase, React applies the changes determined during the render phase to the actual DOM.
 * - This is where React updates the DOM to reflect the new state of the application.
 * - The commit phase can involve side effects, such as updating the DOM, making network requests, or interacting with browser APIs.
 * - Lifecycle methods like componentDidMount and componentDidUpdate are called during the commit phase, allowing developers to perform actions after the DOM has been updated.
 */

/**
 * Summary:
 * - The render phase is focused on calculating what the UI should look like based on state and props, while the commit phase is focused on applying those changes to the actual DOM.
 * - Understanding these phases helps developers write efficient and effective React components by separating pure rendering logic from side-effectful operations.
 * / ****

*

MOUNTING

    Constructor (dummy)
        Render (dummy)
            <HTML Dummy >
                Component Did MMount
<API Call>
<this.setState> -> State variable is updated

UPDATE

render(APi data)
    <HTML (new API data>)
    componentDidUpdate
*/