import { supabase } from "./supabaseClient"

async function getOperationsByTaskId(taskId) {
  const { data, error } = await supabase
    .from("operations")
    .select("*")
    .eq("task_id", taskId)

  if (error) {
    console.log("błąd podczas pobierania", error)
    return false
  } else {
    console.log("pobrano dane", data)
    
    return data
  }
}
export default getOperationsByTaskId
