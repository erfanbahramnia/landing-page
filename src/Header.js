import React, {Component} from "react";

import styles from "./Header.module.css";

class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div>
                    <p>Home Page</p>
                    <p>Products</p>
                    <p>About us</p>
                </div>
                <img src="https://www.botostart.ir/wp-content/uploads/2021/03/Component-93.svg" alt="botostart" />
            </div>
        )
    }
}