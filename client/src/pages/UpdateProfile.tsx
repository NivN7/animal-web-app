import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import Button from "../components/Button";
import Input from "../components/Input";
import { UserStateInterface } from "../redux/user/userSlice";
import { app } from "../firebase";

interface FormData {
  avatar?: string;
}

const UpdateProfile = () => {
  const { currentUser } = useSelector(
    (state: { user: UserStateInterface }) => state.user
  );

  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [filePerc, setFilePerc] = useState<number>(0);
  const [fileUploadError, setFileUploadError] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({});

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file: File) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <form className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files?.[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />

        <img
          onClick={() => fileRef.current?.click()}
          src={formData.avatar || currentUser?.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />

        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700 text-base font-light">
              Error: Image upload failed (image must be less than 2 MB)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-textColor">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-700 text-base font-light">
              Image successfully uploaded!
            </span>
          ) : (
            ""
          )}
        </p>

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
