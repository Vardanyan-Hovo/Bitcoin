"use client"

import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {argumentsDraw} from '@/redux/features/dataSlice';

export default  function RangeDateInput(){
    

    const [isLoading, setIsLoading] = useState(false)
    const [disabled, setDisabled] = useState(true);
    const [dataFirst, setDataFirst] = useState('');
    const [dataLast, setDataLast] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if(dataFirst  && dataLast)
        {
            setDisabled(false);
        }
    },[dataFirst, dataLast])
    
    async function handleFormSubmit(e) {
        e.preventDefault();
        // Set loading to true when the request starts
        setDisabled(true);
        setIsLoading(true);
        setDataFirst('');
        setDataLast('');

        try {
            const response = await fetch('/api/bitcoin', {
                method: 'POST',
                body: JSON.stringify({dataFirst, dataLast}),
                headers: {'Content-Type' : 'application/json'}
            })
            const responseBody = await response.json();

            if (responseBody && Object.keys(responseBody).length > 0)
            {
                console.log("responseBody = " + responseBody);

                //redux dispach
                dispatch(argumentsDraw(responseBody));
            }
            else{
                throw new Error("Response error data does not exist")
            }

        }
        catch(e){
            console.log(e + "");
        }
        finally {
            // Set loading to false when the request completes
            setIsLoading(false)
        }
    }

    return (
        <div className=" text-center mt-3">
            <h2 className="text-white font-semibold">
                Write data for see graphic
            </h2>
            <form className="flex flex-col gap-1 " onSubmit={handleFormSubmit}>
                <div>
                    <input type="datetime-local" name="dataFirst" value={dataFirst} onChange={(e) =>{
                        setDataFirst(e.target.value)
                    }} 
                    />
                </div>
                <div>
                    <input type="datetime-local" name="dataLast" value={dataLast}
                        onChange={(e) =>{
                            setDataLast(e.target.value);
                        }} 
                    />
                </div>
                <button className={`${disabled ? "bg-gray-500 disabled" : "bg-green-500"} w-[100px] mx-auto p-2`}
                        type="submit"
                        disabled={disabled ? true : false}
                    >
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>
        </div>
    )
}
