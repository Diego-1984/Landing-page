import React from "react";


//include images into your bundle

import {MyNavbar} from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
		{MyNavbar}
		<Jumbotron/>
		<Cards/>
		<Footer/>
		</>
	);
};

export default Home;
