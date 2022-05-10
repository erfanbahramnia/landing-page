import React, {Component} from "react";

// component that shows phone cart
import Cart from "./Cart";

// style
import styles from "./Carts.module.css";

class Carts extends Component {
    constructor() {
        super();
        this.state = {
            // images of phone
            iphoneX: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            iphone11: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTF8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            iphone12Pro: "https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHxpcGhvbmV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            iphone13: "https://images.unsplash.com/photo-1640536181543-ae87a107ce1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMDEzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        };
    }
    
    
    render() {
        const {iphoneX, iphone11, iphone12Pro, iphone13} = this.state;

        return (
            <div className={styles.container}>
                <Cart imageAdd={iphoneX} phoneName="iphone X" phonePrice="400$" />
                <Cart imageAdd={iphone11} phoneName="iphone 11" phonePrice="500$" />
                <Cart imageAdd={iphone12Pro} phoneName="iphone 12pro" phonePrice="600$" />
                <Cart imageAdd={iphone13} phoneName="iphone 13" phonePrice="700$" />
            </div>
        )
    }
};

export default Carts;