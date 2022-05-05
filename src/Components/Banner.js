import React, {Component} from "react";


class Banner extends Component {
    render() {
        return (
            <div>
                <img src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <div>
                    <h1>Digi Phone</h1>
                    <p>get upgrade your <span>phone</span></p>
                </div>
            </div>
        )
    }
}

export default Banner