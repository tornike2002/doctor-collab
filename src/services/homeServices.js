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
//servoces moaq
export const apiGetServices = async () => {
  let { data: services, error } = await supabase
    .from("services")
    .select("*")
    .order("id", { ascending: true })
    .limit(6);
  return { services, error };
};
export const AddServices = async ({ image, title, content }) => {
  let { data: services, error } = await supabase
    .from("services")
    .insert({ image: image, title: title, content: content });

  if (error) throw new Error(error.message);
  return services;
};
export const apiUpdateServices = async ({ id, title, image, content }) => {
  const { data: services, error } = await supabase
    .from("services")
    .update({ title, image, content })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return services;
};

export const deleteServices = async (id) => {
  const { data: deleteService, error } = await supabase
    .from("services")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
  return deleteService;
};




export const getServicesId = async (id) => {
  let { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .single();

  return { service: data, error };
};