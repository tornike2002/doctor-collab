import supabase from "./supabase";


export const updatePatients = async (id, status) => {
  const { data, error } = await supabase
    .from("patients")
    .update({ status, id })
    .eq("id", id);
  if (error) throw new Error(error.message);
  return data;
};

export const getPatientsId = async (id) => {
  let { data, error } = await supabase
    .from("patients")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
};

export const patientsPagination = async ({ start, end }) => {
  const { data, error, count } = await supabase
    .from("patients")
    .select("*", { count: "exact" })
    .range(start, end);

  if (error) {
    throw new Error(error.message);
  }
  return { data, count };
};
