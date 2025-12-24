import User from "./User"
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <div className="m-4 p-4 border border-gray-400 rounded-lg bg-gray-100 hover:bg-gray-200">
        <h1>welcome to about page of our webiste</h1>
        <h2>we deliver exactly what you need for your business</h2>
        <h2>This about contains 2 user sections one is functional component and other is class component</h2>
        </div>
        <User
        name={"Ayush"}
        role={"SDE"}
        location={"noida"}
        />
        <UserClass
        name={"Ayush"}
        role={"SDE"}
        location={"noida"}
        />
        </div>
    );
}
export default About;