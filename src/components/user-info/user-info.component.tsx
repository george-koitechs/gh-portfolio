import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Typography } from "@mui/material";
import format from "date-fns/format";

import api from "@/api";
import { UserEntity } from "@/types/user.entity";
import { UserRepos } from "@/components/user-repos/user-repos.component";

import "./user-info.styles.scss";

export const UserInfo = () => {
  const { username } = useParams<{ username: string }>();
  const [loaded, setLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState<null | UserEntity>(null);

  async function getUserInfo() {
    try {
      const { data } = await api.get<UserEntity>(`/users/${username}`);
      setUserInfo(data);
    } finally {
      setLoaded(true);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, [username]);

  if (!loaded) {
    return (
      <Typography variant="h6" align="center">
        Loading...
      </Typography>
    );
  }

  if (!userInfo) {
    return (
      <Typography variant="h6" align="center">
        No user found!
      </Typography>
    );
  }

  return (
    <div className="userInfo">
      <div className="userInfo__main">
        <img src={userInfo.avatar_url} alt={userInfo.name ?? ""} className="userInfo__avatar" />
        <Typography variant="h5">{userInfo.name}</Typography>
      </div>
      <Typography>
        On GitHub since {format(new Date(userInfo.created_at), "yyyy")}, {userInfo.name}{" "}
        {userInfo.location ? `is a developer based in ${userInfo.location}` : null}
        with{" "}
        <a href={`https://github.com/${userInfo.login}?tab=repositories`} target="_blank" rel="noreferrer noopener">
          {userInfo.public_repos} public repositories
        </a>{" "}
        and{" "}
        <a href={`https://github.com/${userInfo.login}/followers`} target="_blank" rel="noreferrer noopener">
          {userInfo.followers} followers
        </a>
        .
      </Typography>

      <UserRepos hasPublicRepos={!!userInfo.public_repos} />
    </div>
  );
};
