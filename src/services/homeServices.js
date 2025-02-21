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

export const apiGetDoctorBio = async function apiGetDoctorBio() {
  const { data, error } = await supabase.from("doctor_name").select("*");
  if (error) throw new Error(error.message);
  return data;
};

export const apiGetDoctorBioImage = async function apiGetDoctorBioImage() {
  const { data, error } = await supabase.from("img").select("*");
  if (error) throw new Error(error.message);
  return data;
};
