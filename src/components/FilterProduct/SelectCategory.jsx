import React from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import useStyle from "./style";
import Spinner from "../Spinner/Spinner";

const SelectCategory = ({ categories, selectedCategory, onChange }) => {
  const classes = useStyle();

  if (!categories) return <Spinner />;

  return (
    <FormControl className={classes.formControl}>
      <Select
        className={classes.selectItem}
        value={selectedCategory.id}
        onChange={onChange}
      >
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCategory;
