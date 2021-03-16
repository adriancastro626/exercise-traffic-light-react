import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [color, setColor] = useState("red");

	const userClick = a => {
		setColor(a);
	};

	return (
		<>
			<div id="app">
				<div id="palito"></div>
				<div id="container">
					<div
						onClick={() => userClick("red")}
						className={
							color == "red" ? "light red clicked" : "light red"
						}></div>
					<div
						onClick={() => userClick("yellow")}
						className={
							color == "yellow"
								? "light yellow clicked"
								: "light yellow"
						}></div>
					<div
						onClick={() => userClick("green")}
						className={
							color == "green"
								? "light green clicked"
								: "light green"
						}></div>
				</div>
			</div>
		</>
	);
}
