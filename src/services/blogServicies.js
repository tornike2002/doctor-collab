
import supabase from "./supabase";
export async function apiGetBlogHero() {
  const { data, error } = await supabase.from("about_hero").select("*");
  if (error) throw error;
  return data;
}