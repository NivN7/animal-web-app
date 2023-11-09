import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { app } from "../firebase";
import { signInSuccess } from "../redux/user/userSlice";
import Button from "./Button";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };
  return (
    <Button
      onClick={handleGoogleClick}
      secondaryColor={true}
      px="px-3"
      py="py-3"
      rounded="rounded-lg"
    >
      CONTINUE WITH GOOGLE
    </Button>
  );
};

export default OAuth;
