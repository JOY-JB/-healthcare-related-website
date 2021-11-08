import { useEffect, useState } from "react";

const useService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        console.log("use effect is called");
        fetch("./fakedata.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return services;
}

export default useService;