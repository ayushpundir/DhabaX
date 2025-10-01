import User from "./User"
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
        <h1>welcome to about page of our webiste</h1>
        <h2>we deliver exactly what you need for your business</h2>
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