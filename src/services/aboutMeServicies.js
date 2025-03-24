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

//education

export const apiGetEducation = async () => {
  let { data, error } = await supabase.from("education").select("*");
  if (error) throw error;
  return data;
};

export const addEducation = async (degree, dateFrom, dateTo, uni) => {
  const { data, error } = await supabase.from("education").insert({
    degree,
    dateFrom,
    dateTo,
    uni,
  });
  if (error) throw new Error(error.message);
  return { data, error };
};

export const deleteEducation = async (id) => {
  const { data, error } = await supabase
    .from("education")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
  return { data, error };
};

export async function apiUpEducation({ degree, dateFrom, dateTo, uni, id }) {
  const { data, error } = await supabase
    .from("education")
    .update({ degree, dateFrom, dateTo, uni, id })
    .single()
    .eq("id", id)
    .order("created_at", { ascending: false });
  if (error) throw error;

  return data;
}

//skills

export const getSkills = async () => {
  const { data, error } = await supabase.from("skills").select("*");
  if (error) throw error;
  return data;
};

export const addSkills = async ({ skil, description }) => {
  const { data, error } = await supabase.from("skills").insert({
    skil,
    description,
  });
  if (error) throw new Error(error.message);
  return { data, error };
};

export const deleteSkills = async (id) => {
  const { data, error } = await supabase.from("skills").delete().eq("id", id);

  if (error) throw new Error(error.message);
  return { data, error };
};

export async function apiUpSkills({ skil, description, id }) {
  const { data, error } = await supabase
    .from("skills")
    .update({ skil, description, id })
    .single()
    .eq("id", id)
    .order("created_at", { ascending: false });
  if (error) throw error;

  return data;
}
