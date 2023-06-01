import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Form from "./form.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {

	return (
		<div className="container-flex">
			<Navbar title={"Start Bootstrap"} link1={"Home"} link2={"About"} link3={"Services"} link4={"Contact"} />
			<Jumbotron title={"A Warm Welcome!"} description={
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			} button={"Call to action!"} />
			<Cards url={"https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ"} 
					title={"Lorem Ipsum"} 
					content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius a sapien ac euismod. Curabitur facilisis ex ligula, in vulputate."}
					button={"Find out more!"} 
					url1={"https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"} 
					content1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium porta ipsum ultricies semper. Morbi eu luctus lacus. Vivamus aliquam non nisi nec luctus. Sed convallis lectus et nisi lacinia."}
					url2={"https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"} 
					content2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium porta ipsum ultricies semper. Morbi eu luctus lacus. Vivamus aliquam non nisi nec luctus. Sed convallis lectus et nisi lacinia."}
					url3={"https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o"} 
					content3={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium porta ipsum ultricies semper. Morbi eu luctus lacus. Vivamus aliquam non nisi nec luctus. Sed convallis lectus et nisi lacinia."}
			/>
			<Footer/>
		</div>
	);
};

export default Home;
