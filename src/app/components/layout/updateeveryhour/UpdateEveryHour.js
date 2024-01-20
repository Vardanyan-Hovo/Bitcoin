"use client"

import { useState } from "react";

const UpdateEveryHour = () => {
    const [isLoading,setIsLoading] = useState(false);

    async function updateMongodb() {
        try {
           
            const response = await fetch('/api/controller')
            if (response?.ok) {
                const responseBody = await response.json();
            }
            else
            {
                throw new Error('Failed to submit the data. Please try again.')
            }
        }
        catch(e){
            console.log("Error " + e);
        }
    }

    //Hour: A unit of time equal to 60 minutes
    function updateMongodbEveryHour()
    {
        let minut;
        setIsLoading(true);
        // setInterval(()=>{
                updateMongodb();
        // },3600000);
        setIsLoading(false);
    }
    return (
        <button 
            type="button" 
            onClick={updateMongodbEveryHour}
            className={`${isLoading ? "bg-gray-500 disabled" : "bg-green-500"} rounded-lg w-52 mt-3`}
            disabled={isLoading ? true: false}
        >
            update data mongodb automatically every hour 👋
        </button>
    )
}

export default UpdateEveryHour;