import { createContext } from "react";
const UserContext = createContext({
    loggedInUser : "defatult User"
});
export default UserContext;