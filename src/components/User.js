const User = ({name, role, location})=>{
    return (
        <div className="about-section m-4 p-4 border border-gray-400 rounded-lg bg-gray-100 hover:bg-gray-200">
            <h2>Name: {name}</h2>
            <h2>role: {role}</h2>
            <h3>Location: {location}</h3>
        </div>
    );
}
export default User;