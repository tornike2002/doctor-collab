import { useState } from "react";

import useLoginMutation from "../hooks/useLoginMutation";
import { validateEmail, validatePassword } from "../lib/helpers";
import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { mutate, isPending } = useLoginMutation();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError) {
      validateEmail(value, setEmailError);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (passwordError) {
      validatePassword(value, setPasswordError);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email, setEmailError);
    const isPasswordValid = validatePassword(password, setPasswordError);

    if (isEmailValid && isPasswordValid) {
      mutate({ email, password });
    }
  };

  return (
    <div className="bg-[#CBDEEF] h-screen flex justify-center items-center  md:px-0">
      <div className="w-full">
        <h2 className="text-[#000] text-center text-[16px] md:text-[31px]  font-bold tracking-[-1.28px] ">
          Welcome
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <CustomInput
              name="email"
              value={email}
              width="max-w-[800px]"
              placeholder="Email"
              bg="bg-[#0000000A]"
              paddingX="px-[13px]"
              paddingY="py-[13.5px]"
              color="text-[#00000080]"
              autoComplete="email"
              onChange={handleEmailChange}
            />
            {emailError && (
              <p className="text-red-500 text-center pt-3">{emailError}</p>
            )}
          </div>

          <div>
            <CustomInput
              type="password"
              name="password"
              value={password}
              width="max-w-[800px]"
              placeholder="Password"
              bg="bg-[#0000000A]"
              paddingX="px-[13px]"
              paddingY="py-[13.5px]"
              color="text-[#00000080]"
              autoComplete="current-password"
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <p className="text-red-500 text-center pt-3">{passwordError}</p>
            )}
          </div>

          <CustomButton
            type="submit"
            centered={"text-center"}
            paddingX={"px-4"}
            paddingY={"py-[14.5px]"}
            maxW={"max-w-[591px]"}
            rounded={"rounded-[56px]"}
            leading={"leading-[43.6px]"}
            color={"text-white"}
            bg={"bg-[#07D]"}
            name={"Sign In"}
            marginT={"mt-10"}
            width={"w-full"}
            disabled={isPending}
            loading={isPending}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
