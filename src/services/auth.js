import supabase from "./supabase";

export const userLogin = async (email, password) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (!data.user) {
    throw new Error("Invalid credentials");
  }

  if (error) {
    throw new Error("Error signing in:", error.message);
  }

  return data.user;
};
