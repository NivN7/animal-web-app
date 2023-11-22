import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { h2, h5, h6, p, redText } from "../constants";
import LoadingSpinner from "../components/LoadingSpinner";
import { IListing } from "../types";
import ImageCarousel from "../components/ImageCarousel";

const Listing = () => {
  const [listing, setListing] = useState<IListing>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();

        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }

        document.title = `Animal | ${data.name}`;

        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main>
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          h-full
        "
      >
        {loading && <LoadingSpinner />}
        {error && <p className={redText}>{error}</p>}
      </div>

      {listing && !loading && !error && (
        <div>
          <div
            className="
              flex
              flex-col
              lg:flex-row
              justify-center
              gap-8
              mx-8
              items-center
              mb-32
              mt-4
            "
          >
            <div className="flex gap-4 flex-col">
              <img
                src={listing.imageUrls[0]}
                alt="Main Image"
                className=" 
                  w-full 
                  h-96 
                  lg:h-[620px] 
                  lg:w-[620px] 
                  object-cover 
                  rounded-lg
                "
              />
            </div>
            <div
              className="
                flex
                flex-col
                md:items-center
                items-start
                bg-cardColor
                rounded-lg
                w-full
                lg:w-1/2
                p-7
                shadow-sm 
                shadow-slate-500 
                overflow-hidden 
              "
            >
              <h2
                className={`
                  ${h2}
                  underline
                  decoration-2
                  underline-offset-8
                  decoration-primaryColor
                `}
              >
                {listing.name}
              </h2>
              <h4 className="text-xl xl:text-3xl text-textColor font-light mt-4">
                {listing.address}
              </h4>

              <div className="flex flex-col gap-4 md:flex-row md:gap-24 mt-4">
                <div className="flex flex-col">
                  <h6 className={h6}>Species </h6>
                  <p className={p}> {listing.species} </p>
                </div>
                <div className="flex flex-col">
                  <h6 className={h6}>Age </h6>
                  <p className={p}> {listing.age} </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:gap-24 mt-4">
                <div className="flex flex-col">
                  <h6 className={h6}>Color </h6>
                  <p className={p}> {listing.color} </p>
                </div>
                <div className="flex flex-col">
                  <h6 className={h6}>Gender </h6>
                  <p className={p}> {listing.gender} </p>
                </div>
                <div className="flex flex-col">
                  <h6 className={h6}>Breed </h6>
                  <p className={p}> {listing.breed} </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:items-center mt-4">
                <h5 className={h5}>Description</h5>
                <p className={p}>{listing.description}</p>
              </div>

              <div className="flex flex-col items-start md:items-center mt-4">
                <h5 className={h5}>Contact Information</h5>
                <p className={p}>{listing.contactNumber}</p>
              </div>

              <div className="flex flex-col items-start md:items-center mt-4">
                <h5 className={h5}>Is vaccination done?</h5>
                <p className={p}>{listing.vaccination}</p>
              </div>
            </div>
          </div>

          {listing.imageUrls.length > 1 && (
            <div className="mb-32">
              <h2 className={`${h2} text-center mb-8`}>Gallery</h2>
              <ImageCarousel images={listing.imageUrls} />
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default Listing;
