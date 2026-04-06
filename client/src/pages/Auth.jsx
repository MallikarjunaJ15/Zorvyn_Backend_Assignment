// pages/Auth.jsx
import { useEffect, useState } from "react";
import AuthCard from "../components/AuthCard";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../redux/api/authApi";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },

    email: "",
    password: "",
  });
  const [registerUser, { data, isSuccess, isError }] =
    useRegisterUserMutation();
  const [loginUser, { isSuccess: loginSuccess, isError: loginError }] =
    useLoginUserMutation();
  useEffect(() => {
    if (isSuccess) {
      navigate("/app");
    }
    if (isError) {
      alert("Something went wrong");
    }
  }, [data, isSuccess, isError]);
  useEffect(() => {
    if (loginSuccess) {
      navigate("/app");
    }
    if(loginError){
       alert("Error")
    }
  }, [loginSuccess, loginError]);
  const handleAuth = async (mode, input) => {
    if (mode === "login") {
      await loginUser({
        email: input.email,
        password: input.password,
      });
    } else {
      await registerUser(input);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative z-10 w-full px-4">
        <AuthCard input={input} setInput={setInput} onSubmit={handleAuth} />
      </div>
    </div>
  );
};

export default Auth;
