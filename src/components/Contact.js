const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">Contact used</h1>
            <form>
                <input 
                type="text" 
                placeholder="Name" 
                className="border border-black m-2 p-2 rounded"
                />
                <input 
                type="text" 
                placeholder="Message" 
                className="border border-black m-2 p-2 rounded"
                />
                <button className="bg-blue-500 text-white m-2 p-2 rounded">Submit</button>
            </form>
        </div>
    )
}
export default Contact;