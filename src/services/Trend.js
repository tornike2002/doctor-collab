import supabase from "./supabase";
export const getPatientsTrend = async () => {
  const { data, error } = await supabase
    .from("patients")
    .select("*")
    .order("date", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
};
