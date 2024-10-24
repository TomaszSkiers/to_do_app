import { supabase } from "./supabaseClient";

async function deleteOperationById(operationId) {
    const { data, error } = await supabase
    .from('operations')
    .delete()
    .eq('id', operationId)

    if(error) {
        console.log('błąd podczas usuwania rekordu', error)
        return false
    }else{
        console.log('rekord usunięty', data)
        return true
    }
}
export default deleteOperationById