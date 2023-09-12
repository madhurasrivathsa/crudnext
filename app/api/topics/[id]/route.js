import connect from "dbConfig/dbConfig";
import Topic from "@/models/topicList";
import {NextRequest,NextResponse} from "next/server";

export async function PUT(request,{params}){
    const {id}=params;
    const{newTitle:title,newDescription:description}=await request.json();
    connect();
    await Topic.findByIdAndUpdate(id,{title,description});
    return NextResponse.json({message:"Topic Updated"},{status:200})

}

export async function GET(request,{params}){
    const {id}=params;
    connect();
    const topic = await Topic.findOne({_id: id})
    return NextResponse.json({topic},{status:200})
}