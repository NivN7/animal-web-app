import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../components/Button";
import { h2, h6, p, redText } from "../constants";
import Input from "../components/Input";
import {
  signInStart,
  signInSuccess,
  signInFailure,
  UserStateInterface,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector(
    (state: { user: UserStateInterface }) => state.user
  );
  const dispatch = useDispatch();

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
      dispatch(signInStart());

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
        dispatch(signInFailure(data.message));
        return;
      }

      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
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
      <form className="flex flex-col gap-4">
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
          {loading ? "Loading..." : "SIGN IN"}
        </Button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p className={p}>Don't have an account?</p>
        <Link to={"/sign-up"}>
          <span className={`${h6}`}>Sign Up</span>
        </Link>
      </div>

      {error && <p className={`${redText} mt-5`}>{error}</p>}
    </div>
  );
};

export default SignIn;
