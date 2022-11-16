import React from "react";
import { Typography } from "@mui/material";

import { Search } from "@/components/search/search.component";

const HomePage = () => {
  return (
    <div className="homePage page">
      <div className="container">
        <Typography variant="h3" align="center">
          Search
        </Typography>

        <Search />
      </div>
    </div>
  );
};

export default HomePage;
