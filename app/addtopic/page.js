"use client";
import React, { useEffect } from "react";
import axios from "axios";
import {useRouter} from "next/navigation";
export default function AddTopic(){
    const router = useRouter();
    const[topic,setTopic]=React.useState({
        title:"",
        description:"",
    })

    const onAddTitle = async()=>{
        try {
            console.log("this is inside the onAddtitle  and the values are ", topic)
            await axios.post("api/topics",topic)
            console.log("the response you have got it " )
           
        } catch (error) {
            console.log("error while sign up new paegeeeee",error.message)
        }
    }

    



    return(
        <form className="flex flex-col gap-3">
        <input id="title" className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Title" onChange={(e)=>setTopic({...topic,title:e.target.value})} value={topic.title}/>
        <input id="description" className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Description" onChange={(e)=>setTopic({...topic,description:e.target.value})} value={topic.description}/>
        <button className="bg-green-800 font-bold text-white py-3 px-6 w-fit" onClick={onAddTitle}>Add Topic</button>
         </form>
       
    )
}