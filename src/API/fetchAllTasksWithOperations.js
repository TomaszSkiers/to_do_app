import { supabase } from "./supabaseClient"

const fetchAllTasksWithOperations = async () => {
  const { data: tasksWithOperations, error } = await supabase
    .from("task_table")
    .select("*, operations(*)") // Pobierz wszystkie taski wraz z ich operacjami

  if (error) {
    console.error("Error fetching tasks and operations:", error)
    return
  }

  // Zobacz wyniki w konsoli
  console.log("All tasks with operations:", tasksWithOperations)

  return tasksWithOperations
}
export default fetchAllTasksWithOperations