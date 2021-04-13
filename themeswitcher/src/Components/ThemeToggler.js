import React, { useContext } from "react";
import ThemeContext from "../Context/Themecontext";

const ThemeToggler = () => {
	const [themeMode, setThemeMode] = useContext(ThemeContext);

	return (
		<div
			onClick={() => {
				setThemeMode(themeMode === "light" ? "dark" : "light");
			}}
		>
			<span>
				{themeMode === "light" ? "Switch To Dark Mode" : "Switch to Light Mode"}
			</span>
		</div>
	);
};

export default ThemeToggler;
