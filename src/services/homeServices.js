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

export const apiUpdateDoctorBio = async function apiUpdateDoctorBio({
  full_name,
  job_description,
  job_code,
  img,
  id,
}) {
  const { data: doctorBio, error } = await supabase
    .from("doctor_info")
    .update({
      full_name: full_name,
      job_description: job_description,
      job_code: job_code,
      img: img,
    })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return { doctorBio, error };
};

export const apiGetServices = async () => {
  let { data: services, error } = await supabase.from("services").select("*");
  return { services, error };
};
