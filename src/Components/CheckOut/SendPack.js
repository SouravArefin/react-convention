import React, { useEffect, useState } from 'react';

const SendPack = () => {
    const [photoGraphyPackage, setPhotoPackage] = useState([])
    const [pacakagePrice,setPacakagePrice]= useState(0)
    useEffect(() => {
        fetch('/photography.json')
            .then(response => response.json())
            .then(data => setPhotoPackage(data))
    }, [])
   
    return (
        <div>
            
        </div>
    );
};

export default SendPack;