//Back end
//for save Mongodb data
import DbSchema from "../../../models/DbSchema";
import { DbConnect, Disconnect } from "../../../dbconnect/DbConnect"

import { NextResponse } from 'next/server';



export async function GET(){
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
        const post = await DbSchema.create(responseBody);
        
        return new NextResponse(JSON.stringify(post));
    } catch (error) {
        console.log("error from route", error);
        return new NextResponse("Error");
    }
}
