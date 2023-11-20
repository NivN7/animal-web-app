import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { UserStateInterface } from "../redux/user/userSlice";
import Button from "../components/Button";
import { h2, h5, p, redText } from "../constants";

interface Listing {
  _id: string;
  name: string;
  imageUrls: string[];
}

const ShowListings = () => {
  const navigate = useNavigate();

  const { currentUser } = useSelector(
    (state: { user: UserStateInterface }) => state.user
  );

  const [showListingsError, setShowListingsError] = useState<boolean>(false);
  const [userListings, setUserListings] = useState<Listing[]>([]);
  const [emptyListing, setEmptyListings] = useState<string>("");

  const handleShowListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();

      if (data.length <= 0) {
        setEmptyListings("No listing found!");
      } else {
        setEmptyListings("");
      }

      if (data.success === false) {
        setShowListingsError(true);
        return;
      }

      setUserListings(data);
    } catch (error) {
      setShowListingsError(true);
    }
  };

  const handleListingDelete = async (listingId: string) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div
        className="
          flex
          gap-8
          sm:justify-start
          justify-center
          mt-7
          sm:ml-4
          px-4
        "
      >
        <Button
          secondaryColor={true}
          rounded="rounded-lg"
          onClick={() => navigate("/create-listing")}
        >
          CREATE NEW LISTING
        </Button>
        <Button
          secondaryColor={true}
          rounded="rounded-lg"
          onClick={handleShowListings}
        >
          LOAD LISTINGS
        </Button>
      </div>

      <h2 className={`${h2} text-center mt-10 mb-2`}>Your Listings</h2>

      {userListings && userListings.length > 0 && (
        <div className="p-7 flex flex-wrap justify-center gap-8">
          {userListings.map((listing: Listing) => (
            <div
              key={listing._id}
              className="
                bg-buttonTextColor 
                shadow-sm 
                shadow-slate-500 
                overflow-hidden 
                rounded-lg 
                w-full 
                sm:w-64
              "
            >
              <Link to={`/listing/${listing._id}`}>
                <img
                  src={listing.imageUrls[0]}
                  alt="listing cover"
                  className="
                    h-64 
                    sm:h-48 
                    w-full 
                    object-cover 
                    hover:scale-105 
                    transition-scale 
                    duration-300
                  "
                />
              </Link>
              <div className="">
                <Link to={`/listing/${listing._id}`}>
                  <h4 className={`${h5} text-center my-2`}>{listing.name}</h4>
                </Link>

                <div className="flex justify-between item-center mx-2 mb-4">
                  <Button
                    redColor={true}
                    rounded="rounded-lg"
                    onClick={() => handleListingDelete(listing._id)}
                  >
                    DELETE
                  </Button>
                  <Button
                    primaryColor={true}
                    rounded="rounded-lg"
                    onClick={() => navigate(`/update-listing/${listing._id}`)}
                  >
                    EDIT
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className={`${p} text-center mt-8`}>
        {emptyListing.length !== 0 ? emptyListing : ""}
      </p>

      <p className={`${redText} text-center mt-8`}>
        {showListingsError ? "Error showing listings" : ""}
      </p>
    </div>
  );
};

export default ShowListings;
