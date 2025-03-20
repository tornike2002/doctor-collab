
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

  export const AddBlog = async ({ title, slug, description, img, reading_time }) => {
    let { data: blogs, error } = await supabase
        .from('blogs')
        .insert({ title, slug, description, img, reading_time });

    if (error) throw new Error(error.message);
    return { blogs, error };
};



export const deleteblogs = async (id) => {
  const { data: blogs, error } = await supabase
    .from("blogs")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
  return blogs;
};

export async function UpdateBlog({ title, slug, description, img, reading_time,id }) {
  const { data, error } = await supabase
    .from("blogs")
    .update({ title, slug, description, img, reading_time,id })
    .eq("id", id)
    .order("created_at", { ascending: false })
  if (error) throw error;

  return data;
}

export const getBlogId = async (id) => {
  let { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  return { blog: data, error };
};