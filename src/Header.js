import React, {Component} from "react";

import styles from "./Header.module.css";

class Header extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <p>Home Page</p>
                    <p>Products</p>
                    <p>About us</p>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8HIFfeVE60zPpgNl-LlUVb-W4UlE79xSdGgz_zAk296iUeqN13inkIR3EF0fSdj2bHQ&usqp=CAU" alt="botostart" />
            </div>
        )
    }
}

export default Header;