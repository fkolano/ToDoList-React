import React from "react";
import {ToDoList} from "./todolist.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<ToDoList />
		</div>
	);
};

export default Home;
