
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hvuwrsukxqmbnwzzscma.supabase.co'
const supabaseKey='sb_publishable_d5X9Z3n9BHFSJtUepGn3IQ_-XFcKxSn'
export const supabase = createClient(supabaseUrl, supabaseKey)   