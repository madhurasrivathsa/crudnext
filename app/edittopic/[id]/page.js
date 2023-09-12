import EditTopicForm from "@/components/EditTopicForm";

export default function EditWithParam(params){
    return(
        <>
        <h1>This is edit with param {params.id}</h1>
        <EditTopicForm/>
        </>
    )
}