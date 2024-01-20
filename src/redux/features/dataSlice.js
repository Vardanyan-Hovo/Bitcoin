import {createSlice} from "@reduxjs/toolkit";
import { format } from 'date-fns';

const dateA = new Date();
const hour = (1000 * 60 * 60);
const time1  = dateA - hour;
const NameTime1 = format(time1, "MMM dd HH:mm ");
const NameTime2 = format((time1 - hour), "MMM dd HH:mm ");
const NameTime3 = format((time1 - (hour * 2)), "MMM dd HH:mm ");
const NameTime4 = format((time1 - (hour * 3)), "MMM dd HH:mm ");
const NameTime5 = format((time1 - (hour * 4)), "MMM dd HH:mm ");
const NameTime6 = format((time1 - (hour * 5)), "MMM dd HH:mm ");

const initialState = {
  data:[
    {
      Time: NameTime6,
      USE: 4000,
      GBP: 2400,
      EUR: 2400,
    },
    {
      Time: NameTime5,
      USE: 30000,
      GBP: 1398,
      EUR: 2400,
    },
    {
      Time:NameTime4,
      USE: 1200,
      GBP: 9800,
      EUR: 2400,
    },
    {
      Time: NameTime3,
      USE: 2780,
      GBP: 3908,
      EUR: 2400,
    },
    {
      Time: NameTime2,
      USE: 1890,
      GBP: 4800,
      EUR: 2400,
    },
    {
      Time:NameTime1,
      USE: 2390,
      GBP: 3800,
      EUR: 2400,
    },
  ]
}
  

export const data = createSlice({
    name : "Draw",
    initialState,
    reducers:{
        argumentsDraw : ((state, action) => {

                   state.data = action.payload.map(function(e){
                                // console.log("name: "+e.time)
                                // console.log("GBP: "+e.bpi.USD.rate_float);
                                // console.log("GBP: "+e.bpi.GBP.rate_float);
                                // console.log("EUR: "+e.bpi.EUR.rate_float);
                            return {
                              name: e.time,
                              USE: e.bpi.USD.rate_float,
                              GBP: e.bpi.GBP.rate_float,
                              EUR: e.bpi.EUR.rate_float,
                            }
                          })
        })
    }
})

export const {argumentsDraw} = data.actions;
export default data.reducer;