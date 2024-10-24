import { supabase } from "./supabaseClient"

const addOperationToTask = async (taskId, operationName) => {
  const { data, error } = await supabase
    .from("operations") // Wskazujesz na tabelę operations
    .insert([
      {
        task_id: taskId, // Klucz obcy powiązany z tabelą task_table
        operation_description: operationName // Nazwa nowej operacji
      }
    ])

  if (error) {
    console.error("Error adding operation:", error)
    return false
  }

  console.log("New operation added:", data)
  return true
}
export default addOperationToTask