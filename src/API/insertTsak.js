import { supabase } from "./supabaseClient"

const insertTask = async (title, description) => {
  try {
    const { error } = await supabase
      .from("task_table")
      .insert([{ title, description }])

    if (error) {
      throw error
    }
    console.log('dane zostały dodane')
    return true
    
  } catch (error) {
    console.log(error)
    return false
  }
}
export default insertTask
//remember validate the data
