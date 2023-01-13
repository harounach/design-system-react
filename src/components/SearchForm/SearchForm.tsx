import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button/Button";
import Icon from "../Button/Icon";

const SearchForm = () => {
  return (
    <form
      action="#"
      className="appbar__search d-flex flex-items-center"
      role="search"
    >
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
