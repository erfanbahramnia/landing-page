import React , {Component} from "react";

// global style 
import "./app.css";

// Header component
import Header from "./Components/Header";
// banner component
import Banner from "./Components/Banner";
// Carts component that shows phones
import Carts from "./Components/Carts";
// component for searchin
import Search from "./Components/Search";

class App extends Component {

    render() {
        return (
            <>
                <Header />
                <Banner />
                <Carts />
                <Search />
            </>
        )
    }
}

export default App;