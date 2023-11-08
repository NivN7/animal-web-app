import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/Button";
import { h2, h6, p } from "../constants";
import Input from "../components/Input";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
    try {
      setLoading(true);

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }

      setLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1
        className={`
        ${h2}
        text-center
        my-7
      `}
      >
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
        />

        <Input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />

        <Button
          onClick={() => {}}
          disabled={loading}
          primaryColor={true}
          px="px-3"
          py="py-3"
          rounded="rounded-lg"
        >
          {loading ? "Loading..." : "SIGN IN"}
        </Button>
      </form>
      <div className="flex gap-2 mt-5">
        <p className={p}>Don't have an account?</p>
        <Link to={"/sign-up"}>
          <span className={`${h6}`}>Sign Up</span>
        </Link>
      </div>

      {error && (
        <p
          className="
            text-base 
            font-light
            text-red-500
            mt-5
          "
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default SignIn;
