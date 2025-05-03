import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    sessionStorage.removeItem("Token");
    sessionStorage.removeItem("Role");
    sessionStorage.removeItem("User");
    navigate("/signin");
  };
  return (
    <div>
      <Button
        className=" border-none bg-transparent text-black hover:bg-transparent ml-0 p-0 m-0 text-normal"
        onClick={handleLogOut}
      >
        Log out
      </Button>
    </div>
  );
};

export default Logout;
