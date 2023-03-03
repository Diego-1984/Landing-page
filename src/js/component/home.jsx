import React from "react";

//include images into your bundle
import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Cards from "./card.jsx";
//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron/>
		<Cards/>
		<Footer/>
		</>
	);
};

export default Home;
