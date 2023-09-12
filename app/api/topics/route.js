import connect from "dbConfig/dbConfig";
import Topic from "@/models/topicList";
import {NextRequest,NextResponse} from "next/server";

connect();
export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { title, description } = reqBody;
    console.log(reqBody);
    const newTopic = new Topic({
      title,
      description,
    });
    const savedTopic = await newTopic.save();
    console.log("Saved Topic is ", savedTopic);
    return NextResponse.json({message:"created"})
  
  } catch (error) {
    return NextResponse.json({message:"not created"})
  
    
  }
}

export async function GET(){
  const topics=await Topic.find();
  console.log("the topics list are ",topics)
  return NextResponse.json({topics})
}


export async function DELETE(request){
  const id = request.nextUrl.searchParams.get("id");
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({message:"Topic deleted"})
}
