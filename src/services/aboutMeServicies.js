import supabase from "./supabase";


export async function apiGetBlogHero() {
    const { data, error } = await supabase.from("about_info").select("*");
    if (error) throw error;
    return data;
  }