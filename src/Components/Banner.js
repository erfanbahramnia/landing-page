import React, {Component} from "react";

// style of Banner
import styles from "./Banner.module.css";

class Banner extends Component {
    render() {
        return (
            <div className={styles.container}>
                <img id={styles.bannerImage} src="https://images.unsplash.com/photo-1610792516775-01de03eae630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <div className={styles.content}>
                    <h1>Digi Phone</h1>
                    <p>get upgrade your <span>phone</span></p>
                </div>
            </div>
        )
    };
};

export default Banner