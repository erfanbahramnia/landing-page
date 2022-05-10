import React, {Component} from "react";

// style
import styles from "./Cart.module.css";

class Cart extends Component {
    render() {
        return (
            <div className={styles.container}>
                <img src={this.props.imageAdd} alt="phone" className={styles.image} />
                <div className={styles.phoneData}>
                    <p>{this.props.phoneName}</p>
                </div>
                <div className={styles.buyPhone}>
                    <p className={styles.phonePrice}>{this.props.phonePrice}</p>
                </div>
            </div>
        )
    };
};

export default Cart;