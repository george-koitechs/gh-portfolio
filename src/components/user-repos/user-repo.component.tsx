import React from "react";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import format from "date-fns/format";

import { RepoEntity } from "@/types/repo.entity";

interface UserRepoProps {
  userRepo: RepoEntity;
}
export const UserRepo: React.FC<UserRepoProps> = ({ userRepo }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography component="a" href={userRepo.html_url} target="_blank" rel="noreferrer noopener">
            {userRepo.name}
          </Typography>
          <Typography>Last update: {format(new Date(userRepo.pushed_at), "dd-MM-yyyy")}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" component="a" href={userRepo.html_url} target="_blank" rel="noreferrer noopener">
            Open
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
