import supabase from "./supabase";

export const apiGetFooter = async () => {
  let { data, error } = await supabase.from("footer").select("*");
  if (error) throw new Error(error.message);
  return data;
};

export const apiUpdateFooter = async ({
  id,
  text,
  phone,
  email,
  address,
  linkedin,
}) => {
  const { data, error } = await supabase
    .from("footer")
    .update({ text, phone, email, address, linkedin, id })
    .single()
    .eq("id", id);
  if (error) throw new Error(error.message);
  return data;
};
