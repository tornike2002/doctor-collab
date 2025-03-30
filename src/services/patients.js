import supabase from "./supabase";

export const getPatients = async () => {
  const { data, error } = await supabase
    .from("patients")
    .select("*")
    .order("date", { ascending: true });
  if (error) throw new Error(error.message);
  return data;
};

export const updatePatients = async (id, status) => {
  const { data, error } = await supabase
    .from("patients")
    .update({ status, id })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return data;
};
