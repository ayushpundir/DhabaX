const User = ({name, role, location})=>{
    return (
        <div className="about-section">
            <h2>Name: {name}</h2>
            <h2>role: {role}</h2>
            <h3>Location: {location}</h3>
        </div>
    );
}
export default User;