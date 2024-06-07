import React, { useState, useCallback } from "react";

import styles from "./SearchBar.module.css";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

  return (
    <div className={styles.SearchBar}>
      <input placeholder="Enter A Song Title" onChange={handleTermChange} />
      <button className={styles.SearchButton} onClick={search}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
