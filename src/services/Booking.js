import supabase from "./supabase";

export const getPatients = async () => {
  const { data, error } = await supabase
    .from("booking")
    .select("*")
    .order("date", { ascending: true })
    .limit(6);

  if (error) throw new Error(error.message);
  return data;
};

export const getServicesApi = async () => {
  let { data, error } = await supabase
    .from("services")
    .select("*")
    .order("id", { ascending: true })
    .limit(5);
  if (error) throw new Error(error.message);
  return data;
};
