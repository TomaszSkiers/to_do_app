import { supabase } from "./supabaseClient"

const fetchLastTask = async () => {
  try {
    const { data, error } = await supabase
      .from("task_table")
      .select("*")
      .order("time_stamp", { ascending: false }) 
      .limit(1) // Ogranicz wynik do 1 rekordu

    if (error) {
      throw error
    }

    console.log(data)
    return data[0] // Zwraca ostatni rekord (jeśli istnieje)

  } catch (error) {
    console.error("Error fetching last task:", error)
    return null
  }
}
export default fetchLastTask