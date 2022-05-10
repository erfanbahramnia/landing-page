import React, {Component} from "react";


class Cart extends Component {
    render() {
        return (
            <div>
                <img src={this.props.imageAdd} />
                <div>
                    <p>{this.props.phoneName}</p>
                </div>
                <div>
                    <p>{this.props.phonePrice}</p>
                </div>
            </div>
        )
    };
};

export default Cart;