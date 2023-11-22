import { useState, useEffect, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import { h2, h5, h6, p } from "../constants";
import LoadingSpinner from "../components/LoadingSpinner";
import { IListing } from "../types";

const speciesOption = [
  { value: "Dog", label: "Dog" },
  { value: "Cat", label: "Cat" },
  { value: "Fish", label: "Fish" },
  { value: "Bird", label: "Bird" },
  { value: "Rabbit", label: "Rabbit" },
  { value: "Guinea Pig", label: "Guinea Pig" },
  { value: "Hamster", label: "Hamster" },
];

const colorOption = [
  { value: "Black", label: "Black" },
  { value: "Brown", label: "Brown" },
  { value: "White", label: "White" },
  { value: "Red", label: "Red" },
  { value: "Cream", label: "Cream" },
  { value: "Tabby", label: "Tabby" },
  { value: "Gold", label: "Gold" },
  { value: "Grey", label: "Grey" },
  { value: "Orange", label: "Orange" },
  { value: "Blue", label: "Blue" },
];

const orderOption = [
  { value: "-createdAt", label: "Latest" },
  { value: "createdAt", label: "Oldest" },
  { value: "name", label: "A to Z" },
  { value: "-name", label: "Z to A" },
];

const SearchPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    species: "",
    color: "",
    sort: "",
  });

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState<IListing | any>([]);
  console.log(listings);

  const [showMore, setShowMore] = useState(false);
  const [noMoreListings, setNoMoreListings] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    const nameFromUrl = urlParams.get("name");
    const speciesFromUrl = urlParams.get("species");
    const colorFromUrl = urlParams.get("color");
    const sortFromUrl = urlParams.get("sort");

    if (nameFromUrl || speciesFromUrl || colorFromUrl || sortFromUrl) {
      setFormData({
        name: nameFromUrl || "",
        species: speciesFromUrl || "",
        color: colorFromUrl || "",
        sort: sortFromUrl || "",
      });
    }

    const fetchListings = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();

      if (data.listings.length > 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }

      setListings(data.listings);
      setLoading(false);
      setNoMoreListings(false);
    };

    fetchListings();
  }, [location.search]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSelectChange = (selectedValue: string, fieldName: string) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: selectedValue }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("name", formData.name);
    urlParams.set("species", formData.species);
    urlParams.set("color", formData.color);
    urlParams.set("sort", formData.sort);

    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleClearAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setFormData({
      name: "",
      species: "",
      color: "",
      sort: "",
    });

    const urlParams = new URLSearchParams();
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };

  const onShowMoreClick = async () => {
    const limit = 10;
    const currentPage: number = Math.ceil(listings.length / limit) + 1;

    const urlParams = new URLSearchParams(location.search);
    urlParams.set("page", currentPage.toString());

    const searchQuery = urlParams.toString();
    console.log(searchQuery);

    const res = await fetch(`/api/listing/get?${searchQuery}`);
    const data: IListing[] | any = await res.json();

    console.log(data);

    if (data.listings.length > 0) {
      setListings([...listings, ...data.listings]);
      setNoMoreListings(false);
    } else {
      setShowMore(false);
      setNoMoreListings(true);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row mb-10">
      <div
        className="
          p-7
          border-b
          lg:border-r
          border-textColor
          lg:h-min
          lg:w-[320px]
        "
      >
        <form className="flex flex-col gap-6">
          <h5 className={`${h5}`}>Filters</h5>

          <Input
            type="text"
            placeholder="Search"
            id="name"
            onChange={handleInputChange}
            notRequired
            value={formData.name}
          />

          <Select
            options={speciesOption}
            onChange={(selectedValue) =>
              handleSelectChange(selectedValue, "species")
            }
            defaultLabel="species"
            value={formData.species}
          />

          <Select
            options={colorOption}
            onChange={(selectedValue) =>
              handleSelectChange(selectedValue, "color")
            }
            defaultLabel="color"
            value={formData.color}
          />

          <Select
            options={orderOption}
            onChange={(selectedValue) =>
              handleSelectChange(selectedValue, "sort")
            }
            defaultLabel="order"
            value={formData.sort}
          />

          <Button
            onClick={handleSubmit}
            primaryColor={true}
            px="px-3"
            py="py-3"
            rounded="rounded-lg"
          >
            SEARCH
          </Button>

          <Button
            onClick={handleClearAll}
            redColor={true}
            px="px-3"
            py="py-3"
            rounded="rounded-lg"
          >
            CLEAR ALL
          </Button>
        </form>
      </div>

      <div className="p-7 flex-1 flex flex-wrap justify-center gap-8">
        <h2 className={`${h2} text-center w-full sm:mt-0 mt-7`}>
          Search Result
        </h2>

        {!loading && listings.length === 0 && (
          <p className={`${p} text-center w-full`}>No listing found!</p>
        )}

        {loading && <LoadingSpinner />}

        {!loading &&
          listings &&
          listings.map((listing: any) => (
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
              <Link
                to={`/listing/${listing._id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <div className="p-2 flex flex-col  gap-2 w-full">
                <h4 className={`${h5}`}>{listing.name}</h4>
                <p className={`${h6} truncate`}>{listing.address}</p>
                <p className={`${p} line-clamp-2`}>{listing.description}</p>
              </div>
            </div>
          ))}

        <div className="flex justify-center w-full">
          {!loading && showMore && (
            <Button
              onClick={onShowMoreClick}
              primaryColor={true}
              rounded="rounded-lg"
            >
              SHOW MORE
            </Button>
          )}

          {!loading && noMoreListings && (
            <p className={p}>There are no more listings to show.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
