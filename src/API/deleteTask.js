import {supabase} from './supabaseClient'

async function deleteTask(taskId){
    const { data, error } = await supabase
    .from('task_table')
    .delete()
    .eq('id', taskId)

    if (error) {
        console.error('Błąd podczas usuwania rekordu:', error)
        return false
    }else{
        console.log('Rekord usunięty:', data)
        return true
    }
}

export default deleteTask