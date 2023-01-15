import React from "react";
import classNames from "classnames";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { BaseProps } from "../../interfaces/BaseProps";

import Button from "../Button/Button";
import Icon from "../Button/Icon";

interface SearchFormProps extends BaseProps {}

const SearchForm = ({ customclasses }: SearchFormProps) => {
  const classes = classNames("d-flex", "flex-items-center", customclasses);

  return (
    <form action="#" className={classes} role="search">
      <input
        className="appbar__search-input text-field text-field--search"
        type="text"
        placeholder="Search..."
      />

      <Button primary search>
        <Icon type={faSearch} />
      </Button>
    </form>
  );
};

export default SearchForm;
