"use client"
import RangeDateInput from "./dateinput/RangeDateInput"
import Grafic from "./grafic/Grafic"
import UpdateEveryHour from "./updateeveryhour/UpdateEveryHour";

export default function HomeSection(){
    return (
        <section className=" text-center">
            <Grafic />
            <RangeDateInput />
            <UpdateEveryHour/>
        </section>
    )
}