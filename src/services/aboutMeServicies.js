import supabase from "./supabase";

export const apiAboutInfo = async () => {
  let { data, error } = await supabase.from("about_info").select("*");
  if (error) throw error;
  return data;
};

export async function apiUpAboutInfo({ img, text, id }) {
  const { data, error } = await supabase
    .from("about_info")
    .update({ img,  text })
    .eq("id", id);
  if (error) throw error;

  return data;
}
