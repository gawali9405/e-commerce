import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hjwgmefjknhgcwldrfir.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhqd2dtZWZqa25oZ2N3bGRyZmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MTY1OTUsImV4cCI6MjA2Mjk5MjU5NX0.3GCTTBeBtj2chlrjHvCL3B-tp1NTT5wbgsWeSWiWtTI";

export const supabase = createClient(supabaseUrl, supabaseKey);
