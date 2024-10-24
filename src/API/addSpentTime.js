import { supabase } from "./supabaseClient"

const addSpentTime = async (operationId, time) => {
  const { data, error } = await supabase
    .from("operations")
    .update({ spent_time: time })  // Używamy `update` zamiast `insert`
    .eq("id", operationId)  // Aktualizujemy operację o danym `operationId`

  if (error) {
    console.log("coś nie tak z dodaniem czasu operacji", error)
    return false
  } else {
    console.log('dodano czas do bazy danych', data)
    return true
  }
}

export default addSpentTime