import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://fieokamosdtuuqomfdhz.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZW9rYW1vc2R0dXVxb21mZGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyNTM5NTAsImV4cCI6MjA0NDgyOTk1MH0.E-YVGavWJ4du27N7eBiDWE4r-yHfL3ZHoYWaHCMDX9A"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
