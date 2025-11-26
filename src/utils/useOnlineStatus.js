import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [useOnlineStatus, setOnlineStatus] = useState(true);
    //check if online or offline
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        }); 
    }
    , []);
    // boolean value
    return useOnlineStatus;
};
export default useOnlineStatus;