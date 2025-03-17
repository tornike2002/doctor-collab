
import supabase from "./supabase";
export async function apiGetBlogHero() {
  const { data, error } = await supabase.from("about_hero").select("*");
  if (error) throw error;
  return data;
}

export async function apiUpdateBlogHero({ img, sub_title, title, id }) {
    const { data, error } = await supabase
      .from("about_hero")
      .update({ img: img, sub_title: sub_title, title: title })
      .eq("id", id);
    if (error) throw error;
  
    return data;
  }




  export async function apiGetBlogAdd() {
    const { data, error } = await supabase.from("blogs").select("*");
    if (error) throw error;
    return data;
  }