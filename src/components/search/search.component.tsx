import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { generatePath } from "react-router-dom";

import { ROUTES } from "@/constants";

import "./search.styles.scss";

interface SearchForm {
  username: string;
}
const schema = yup.object({
  username: yup.string().required(),
});
export const Search = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState } = useForm<SearchForm>({
    defaultValues: { username: "" },
    resolver: yupResolver(schema),
  });

  function onSubmit(data: SearchForm) {
    navigate(generatePath(ROUTES.USER, { username: data.username }));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="searchForm">
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            size="medium"
            variant="outlined"
            placeholder="Enter username..."
            error={!!formState.errors.username?.message}
            helperText={formState.errors.username?.message}
            {...field}
          />
        )}
      />

      <Button type="submit" variant="contained" size="large" className="searchForm__btn">
        Go!
      </Button>
    </form>
  );
};
