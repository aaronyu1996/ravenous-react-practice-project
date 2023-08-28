import React from "react";
import styles from "./SearchBar.js";

const SearchBar = () => {


    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarFields}>
            <input className={`${styles.input} ${styles.search}`} placeholder="Search for Businesses" />
            <input className={`${styles.input} ${styles.location}`} placeholder="Where?" />
            </div>
            <div className={styles.searchBarSort}>
                <label>Sort by:</label>
                <select>
                    <option value="best_match">Best Match</ option>
                    <option value="rating">Highest Rated</option>
                    <option value="review_count">Most Reviewed</option>
                </select>
            </div>
            <div className={styles.SearchBarSubmit}>
                <button type="submit">Search</button>
            </div>
        </div>
    );

};

export default SearchBar;