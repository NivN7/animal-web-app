import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import { UserStateInterface } from "../redux/user/userSlice";

export default function PrivateRoute() {
  const { currentUser } = useSelector(
    (state: { user: UserStateInterface }) => state.user
  );

  return Object.keys(currentUser).length !== 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" />
  );
}
