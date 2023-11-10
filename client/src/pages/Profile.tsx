import { useState } from "react";

import Button from "../components/Button";
import UpdateProfile from "./UpdateProfile";
import ShowListings from "./ShowListings";

const Profile = () => {
  type TabType = "update" | "listings";

  const [activeTab, setActiveTab] = useState<TabType>("update");

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      {/* Tab navigation */}
      <div className="flex items-center justify-center gap-4">
        <Button
          primaryColor={true}
          onClick={() => handleTabChange("update")}
          disabled={activeTab === "update"}
          px="px-8"
          py="py-3"
          rounded="rounded-lg"
        >
          Update Profile
        </Button>
        <Button
          primaryColor={true}
          onClick={() => handleTabChange("listings")}
          disabled={activeTab === "listings"}
          px="px-8"
          py="py-3"
          rounded="rounded-lg"
        >
          Show Listings
        </Button>
      </div>

      {/* Render content based on active tab */}
      <div>
        {activeTab === "update" && <UpdateProfile />}
        {activeTab === "listings" && <ShowListings />}
      </div>
    </div>
  );
};

export default Profile;
