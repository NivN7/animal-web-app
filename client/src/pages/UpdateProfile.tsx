import { useSelector } from "react-redux";

import Button from "../components/Button";
import Input from "../components/Input";
import { UserStateInterface } from "../redux/user/userSlice";

const UpdateProfile = () => {
  const { currentUser } = useSelector(
    (state: { user: UserStateInterface }) => state.user
  );

  return (
    <div className="p-3 max-w-lg mx-auto">
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />

        <Input
          type="text"
          placeholder="username"
          id="username"
          onChange={() => {}}
        />

        <Input
          type="email"
          placeholder="email"
          id="email"
          onChange={() => {}}
        />

        <Input
          type="password"
          placeholder="password"
          id="password"
          onChange={() => {}}
        />

        <Button
          onClick={() => {}}
          primaryColor={true}
          px="px-3"
          py="py-3"
          rounded="rounded-lg"
        >
          UPDATE
        </Button>
      </form>
    </div>
  );
};

export default UpdateProfile;
