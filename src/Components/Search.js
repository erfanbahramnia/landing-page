import React, {Component} from "react";

// style
import styles from "./Search.module.css";

class Search extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>Search What You Want</h1>
                <input type="text" placeholder="search..." />
            </div>
        )
    };
};

export default Search;