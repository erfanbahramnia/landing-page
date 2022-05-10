import React , {Component} from "react";

// global style 
import "./app.css";

// Header component
import Header from "./Components/Header";
// banner component
import Banner from "./Components/Banner";
// Carts component that shows phones
import Carts from "./Components/carts";

class App extends Component {

    render() {
        return (
            <>
                <Header />
                <Banner />

            </>
        )
    }
}

export default App;