import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Input from "../components/Input";
import RadioButtons from "../components/RadioButton";
import { h2, h6, p, redText } from "../constants";
import Button from "../components/Button";
import Select from "../components/Select";
import { UserStateInterface } from "../redux/user/userSlice";

interface FormData {
  imageUrls: string[];
  name: string;
  address: string;
  species: string;
  age: string;
  breed: string;
  color: string;
  contactNumber: number;
  description: string;
  gender: string;
  vaccination: string;
}

const UpdateListing: React.FC = () => {
  const { currentUser } = useSelector(
    (state: { user: UserStateInterface }) => state.user
  );

  const [formData, setFormData] = useState<FormData>({
    imageUrls: [],
    name: "",
    address: "",
    species: "",
    age: "",
    breed: "",
    color: "",
    contactNumber: 0,
    description: "",
    gender: "",
    vaccination: "",
  });

  const navigate = useNavigate();

  const [files, setFiles] = useState<FileList | null>(null);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [imageUploadError, setImageUploadError] = useState<string | boolean>(
    false
  );
  const [uploading, setUploading] = useState(false);

  const params = useParams();

  const speciesOption = [
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Fish", label: "Fish" },
    { value: "Bird", label: "Bird" },
    { value: "Rabbit", label: "Rabbit" },
    { value: "Guinea Pig", label: "Guinea Pig" },
    { value: "Hamster", label: "Hamster" },
  ];

  const genderOption = [
    { label: "Male", optionValue: "Male" },
    { label: "Female", optionValue: "Female" },
  ];

  const vaccinationOption = [
    { label: "Yes", optionValue: "Yes" },
    { label: "No", optionValue: "No" },
  ];

  useEffect(() => {
    const fetchListing = async () => {
      const listingId = params.listingId;
      const res = await fetch(`/api/listing/get/${listingId}`);
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      setFormData(data);
    };

    fetchListing();
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSelectChange = (selectedValue: string) => {
    setFormData((prevData) => ({ ...prevData, species: selectedValue }));
  };

  const handleRadioChange = (
    name: string,
    selectedOption: string | boolean
  ) => {
    setFormData((prevData) => ({ ...prevData, [name]: selectedOption }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);

      const res = await fetch(`/api/listing/update/${params.listingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });

      const data = await res.json();
      console.log(data);

      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }

      navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }

    console.log(formData);
  };

  const handleImageSubmit = () => {
    if (
      files &&
      files.length > 0 &&
      files.length + formData.imageUrls.length < 7
    ) {
      setUploading(true);
      setImageUploadError(false);

      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }

      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });

          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          console.log(err);
          setImageUploadError("Image upload failed (2 mb max per image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can only upload 6 images per listing");
      setUploading(false);
    }
  };

  const storeImage = async (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index: number) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h2 className={`${h2} text-center my-7`}>Update a Listing</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row sm:gap-12 gap-4"
      >
        <div className="flex flex-col gap-4 flex-1">
          <Input
            type="text"
            placeholder="Name"
            id="name"
            onChange={handleInputChange}
            value={formData.name}
          />

          <Input
            type="text"
            placeholder="Address"
            id="address"
            onChange={handleInputChange}
            value={formData.address}
          />

          <Select
            options={speciesOption}
            onChange={handleSelectChange}
            value={formData.species}
            defaultLabel="species"
            isRequired={true}
          />

          <Input
            type="text"
            placeholder="Age"
            id="age"
            onChange={handleInputChange}
            value={formData.age}
          />

          <Input
            type="string"
            placeholder="Breed"
            id="breed"
            onChange={handleInputChange}
            value={formData.breed}
          />

          <Input
            type="string"
            placeholder="Color"
            id="color"
            onChange={handleInputChange}
            value={formData.color}
          />

          <h3 className={h6}>Contact number</h3>
          <Input
            type="tel"
            placeholder="Contact Number"
            id="contactNumber"
            onChange={handleInputChange}
            value={formData.contactNumber}
          />
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <textarea
            placeholder="Description"
            className="border p-3 rounded-lg bg-backgroundColor text-textColor border-textColor"
            id="description"
            onChange={handleInputChange}
            required
            value={formData.description}
          />

          <div className="flex gap-12">
            <div className="flex flex-col">
              <h3 className={h6}>Gender</h3>
              <RadioButtons
                options={genderOption}
                onRadioChange={(selectedOption) =>
                  handleRadioChange("gender", selectedOption)
                }
                name="gender"
                value={formData.gender}
              />
            </div>
            <div className="flex flex-col">
              <h3 className={h6}>Vaccination</h3>
              <RadioButtons
                options={vaccinationOption}
                onRadioChange={(selectedOption) =>
                  handleRadioChange("vaccination", selectedOption)
                }
                name="vaccination"
                value={formData.vaccination}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <input
              className={`${p} p-3 border border-gray-300 rounded w-full`}
              type="file"
              id="images"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
            <button
              type="button"
              disabled={uploading}
              onClick={handleImageSubmit}
              className="
                p-3
                text-primaryColor
                border
                border-primaryColor
                rounded
                uppercase
                hover:shadow-lg
                disabled:opacity-80
              "
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </div>

          <p className={redText}>{imageUploadError && imageUploadError}</p>

          {formData.imageUrls.length > 0 &&
            formData.imageUrls.map((url, index) => (
              <div
                key={url}
                className="flex justify-between p-3 border border-textColor items-center"
              >
                <img
                  src={url}
                  alt="listing image"
                  className="w-20 h-20 object-contain rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="p-3 text-red-700 rounded-lg uppercase hover:opacity-75"
                >
                  Delete
                </button>
              </div>
            ))}

          <Button
            disabled={loading || uploading}
            primaryColor={true}
            px="px-3"
            py="py-3"
            rounded="rounded-lg"
          >
            {loading ? "Updating..." : "UPDATE LISTINGS"}
          </Button>
          {error && <p className={redText}>{error}</p>}
        </div>
      </form>
    </main>
  );
};

export default UpdateListing;
