import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ywahgdgenagqwmoqdtar.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3YWhnZGdlbmFncXdtb3FkdGFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3Mzc1ODMsImV4cCI6MjA0NDMxMzU4M30.fM6DK1Cr9w_9wWmCgsml2Hf4mqQKu-BizEMK41GPTHM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)