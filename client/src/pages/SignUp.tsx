import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/Button";
import { h2, h6, p, redText } from "../constants";
import Input from "../components/Input";
import OAuth from "../components/OAuth";

const SignUp = () => {
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

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log(formData);
    try {
      setLoading(true);

      const res = await fetch("/api/auth/signup", {
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
      navigate("/sign-in");
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
        Sign Up
      </h1>
      <form className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />

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
          onClick={handleSubmit}
          disabled={loading}
          primaryColor={true}
          px="px-3"
          py="py-3"
          rounded="rounded-lg"
        >
          {loading ? "Loading..." : "SIGN UP"}
        </Button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p className={p}>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className={`${h6}`}>Sign In</span>
        </Link>
      </div>

      {error && <p className={`${redText} mt-5`}>{error}</p>}
    </div>
  );
};

export default SignUp;
