//Back end
//for save Mongodb data
import {Test2, Test3} from "../../../models/Test";
import DbSchema from "../../../models/DbSchema";
import { DbConnect, Disconnect } from "../../../dbconnect/DbConnect"

import { NextResponse } from 'next/server';



export async function GET(){
    console.log("every hour", new Date());
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
            method: 'GET',
            headers: {'Content-Type' : 'application/json'}
        })

        if (!response.ok) {
            throw new Error('Failed to submit the data. Please try again.')
        }

        const responseBody = await response.json();

        //connect whit Mongodb
        await DbConnect();

        //add data to MongoDb
        // const post = await DbSchema.create(responseBody);
        const post1 = await DbSchema.create(Test2);
        const post = await DbSchema.create(Test3);
        console.log("Post post" + post);
 
        return new NextResponse(JSON.stringify(responseBody));
    } catch (error) {
        console.log("error from route", error);
        return new NextResponse("Error");
    }
}
