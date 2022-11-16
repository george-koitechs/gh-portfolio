import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Typography } from "@mui/material";

import api from "@/api";
import { GetUserReposDTO } from "@/types/dto/get-user-repos.dto";
import { RepoEntity } from "@/types/repo.entity";
import { UserRepo } from "@/components/user-repos/user-repo.component";

import "./user-repos.styles.scss";

interface UserReposProps {
  hasPublicRepos: boolean;
}
export const UserRepos: React.FC<UserReposProps> = ({ hasPublicRepos }) => {
  const { username } = useParams<{ username: string }>();
  const [loaded, setLoaded] = useState(false);
  const [userRepos, setUserRepos] = useState<null | RepoEntity[]>(null);

  async function getUserRepos() {
    if (!hasPublicRepos) return;
    const queryString = "q=" + encodeURIComponent(`user:${username}`);
    try {
      const { data } = await api.get<GetUserReposDTO>(
        `/search/repositories?${queryString}&sort=updated&order=desc&per_page=12`
      );
      setUserRepos(data.items);
    } finally {
      setLoaded(true);
    }
  }

  useEffect(() => {
    getUserRepos();
  }, [username, hasPublicRepos]);

  if (!hasPublicRepos) return null;

  if (!loaded) {
    return (
      <Typography variant="h6" align="center">
        Loading...
      </Typography>
    );
  }

  if (!userRepos) {
    return (
      <Typography variant="h6" align="center">
        No repos found!
      </Typography>
    );
  }

  return (
    <div className="userRepos">
      <Grid container spacing={5}>
        {userRepos.map((userRepo) => (
          <UserRepo key={userRepo.id} userRepo={userRepo} />
        ))}
      </Grid>
    </div>
  );
};
