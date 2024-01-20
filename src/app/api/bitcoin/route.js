//Back end

import { format } from 'date-fns';
import DbSchema from "../../../models/DbSchema";
import { DbConnect, Disconnect } from "../../../dbconnect/DbConnect"

import { NextResponse } from 'next/server';


export async function POST(req){
    try {
        const post  = [];

        const body = await req.json();

        // 2024-01-17T20:46:47+00:00
        const timeFirst = body.dataFirst;
        const timeLast = body.dataLast;
        const dateFirstObject = new Date(timeFirst);
        const dateLastObject = new Date(timeLast);

        //connect check whit Mongodb
        await DbConnect();

        if (dateFirstObject < dateLastObject)
        {
            let differenceInMillis = dateLastObject - dateFirstObject;

            //max 6 data
            let sixHours = (1000 * 60 * 60) * 6;
            let intervalInMillis = 0;
            if (differenceInMillis >= sixHours) 
            {
                intervalInMillis = ((differenceInMillis / 5) + (differenceInMillis % 5));
            } else{
                intervalInMillis = (differenceInMillis / (1000 * 60 * 60));
            }
                
            let s = dateFirstObject.getTime();
            while (s <= dateLastObject.getTime())
            {
                const z = new Date(s);
                const searchData = format(z, "MMM dd, yyyy 'at' HH:mm 'GMT'");
                let dataQuesion = await DbSchema.find({ "time.updateduk": searchData }).exec();

                console.log("      " + JSON.stringify(dataQuesion) + "   typeof(dataQuesion)  " + typeof(dataQuesion))

                console.log("searchData    " + searchData + "   typeof(searchData)  " + typeof(searchData));
                if (dataQuesion && Object.keys(dataQuesion).length > 0)
                {
                    let objectItem = {
                        time : searchData,
                        bpi : dataQuesion[0].bpi
                    }
                    post.push(objectItem);
                }
                s = s + intervalInMillis;
            }
        }
        else
        {
            throw new Error("date last must be greater than data first date");
        }
        return new NextResponse(JSON.stringify(post));
    } catch (error) {
        return new NextResponse("Error");
    }
}
