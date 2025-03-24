import supabase from "./supabase";

export const apiAboutInfo = async () => {
  let { data, error } = await supabase.from("about_info").select("*");
  if (error) throw error;
  return data;
};

export async function apiUpAboutInfo({ img, text, id }) {
  const { data, error } = await supabase
    .from("about_info")
    .update({ img, text })
    .eq("id", id);
  if (error) throw error;

  return data;
}

export const apiExperinece = async () => {
  let { data, error } = await supabase.from("experience").select("*");
  if (error) throw error;
  return data;
};

export const apiAddAboutMeExperience = async ({
  dateTo,
  dateFrom,
  place,
  department,
  position,
}) => {
  let { data, error } = await supabase
    .from("experience")
    .insert({ place, department, dateFrom, dateTo, position });

  if (error) throw new Error(error.message);
  return { data, error };
};

const apiDeleteAboutMeExperience = async (id) => {
  const { data, error } = await supabase
    .from("experience")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
  return { data, error };
};

export default apiDeleteAboutMeExperience;

export async function apiUpExperience({
  place,
  department,
  dateTo,
  dateFrom,
  position,
  id,
}) {
  const { data, error } = await supabase
    .from("experience")
    .update({ place, department, dateFrom, dateTo, position })
    .single()
    .eq("id", id)
    .order("created_at", { ascending: false });
  if (error) throw error;

  return data;
}

export const apiGetExperienceById = async (id) => {
  let { data, error } = await supabase
    .from("experience")
    .select("*")
    .eq("id", id)
    .single();

  return { blog: data, error };
};
