import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

// import Home from "./pages/Home";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
// import PrivateRoute from "./components/PrivateRoute";
// import Profile from "./pages/Profile";
// import CreateListing from "./pages/CreateListing";
// import UpdateListing from "./pages/UpdateListing";
// import SearchPage from "./pages/SearchPage";
// import Listing from "./pages/Listing";
// import CreditsPage from "./pages/CreditsPage";

const LazyHome = React.lazy(() => import("./pages/Home"));
const LazySignIn = React.lazy(() => import("./pages/SignIn"));
const LazySignUp = React.lazy(() => import("./pages/SignUp"));
const LazyProfile = React.lazy(() => import("./pages/Profile"));
const LazyPrivateRoute = React.lazy(() => import("./components/PrivateRoute"));
const LazyCreateListing = React.lazy(() => import("./pages/CreateListing"));
const LazyUpdateListing = React.lazy(() => import("./pages/UpdateListing"));
const LazySearchPage = React.lazy(() => import("./pages/SearchPage"));
const LazyListing = React.lazy(() => import("./pages/Listing"));
const LazyCreditsPage = React.lazy(() => import("./pages/CreditsPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazyHome />
            </Suspense>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazySignIn />
            </Suspense>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazySignUp />
            </Suspense>
          }
        />
        <Route
          path="/search"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazySearchPage />
            </Suspense>
          }
        />
        <Route
          path="/listing/:listingId"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazyListing />
            </Suspense>
          }
        />
        <Route
          path="/credits"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazyCreditsPage />
            </Suspense>
          }
        />
        <Route
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazyPrivateRoute />
            </Suspense>
          }
        >
          <Route
            path="/profile"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <LazyProfile />
              </Suspense>
            }
          />
          <Route
            path="/create-listing"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <LazyCreateListing />
              </Suspense>
            }
          />
          <Route
            path="/update-listing/:listingId"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <LazyUpdateListing />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
