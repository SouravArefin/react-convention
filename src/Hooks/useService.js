import { useEffect, useState } from "react";


const useService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
        .then(data=> setServices(data))
    }, [])
    
    return[services]
};

export default useService;
