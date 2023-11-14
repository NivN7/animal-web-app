import { useState } from "react";

import Button from "../components/Button";
import UpdateProfile from "./UpdateProfile";
import ShowListings from "./ShowListings";

const Profile = () => {
  type TabType = "update" | "listings";

  const [activeTab, setActiveTab] = useState<TabType>("listings");

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Tab navigation */}
      <div className="flex items-center justify-center gap-4 mt-8 px-4">
        <Button
          accentColor={true}
          onClick={() => handleTabChange("listings")}
          disabled={activeTab === "listings"}
          px="px-8"
          py="py-3"
          rounded="rounded-lg"
        >
          Show Listings
        </Button>

        <Button
          accentColor={true}
          onClick={() => handleTabChange("update")}
          disabled={activeTab === "update"}
          px="px-8"
          py="py-3"
          rounded="rounded-lg"
        >
          Update Profile
        </Button>
      </div>

      {/* Render content based on active tab */}
      <div>
        {activeTab === "listings" && <ShowListings />}
        {activeTab === "update" && <UpdateProfile />}
      </div>
    </div>
  );
};

export default Profile;
