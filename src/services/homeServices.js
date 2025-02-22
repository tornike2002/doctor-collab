import supabase from "./supabase";

export const apiGetBanner = async () => {
  let { data: title, error } = await supabase.from("banner").select("*");
  return { title, error };
};

export const UpdateBanner = async ({ id, title }) => {
  let { data, error } = await supabase
    .from("banner")
    .update({ title: title })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return { data, error };
};

export const apiGetDoctorBio = async () => {
  let { data: full_name, error } = await supabase
    .from("doctor_info")
    .select("*");
  return { full_name, error };
};

export const apiGetDoctorBioImage = async () => {
  let { data: img, error } = await supabase.from("doctor_info").select("*");
  return { img, error };
};
