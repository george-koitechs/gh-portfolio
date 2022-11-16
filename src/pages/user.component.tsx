import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { UserInfo } from "@/components/user-info/user-info.component";
import { ROUTES } from "@/constants";

const UserPage = () => {
  return (
    <div className="userPage page">
      <div className="container">
        <Button variant="outlined" component={Link} to={ROUTES.HOME} sx={{ mb: 5 }}>
          Go to homepage
        </Button>
        <UserInfo />
      </div>
    </div>
  );
};

export default UserPage;
