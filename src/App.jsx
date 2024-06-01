import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Switch, Button } from "@mui/material";
import Router from "./app/router";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import lightMode from "./themes/light";
import darkMode from "./themes/dark";

import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [isDarkMode, setIsDarkMode] = useState(true);

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	const theme = isDarkMode ? darkMode : lightMode;

	return (
		<ThemeProvider theme={theme}>
			<Router />
			<Switch checked={isDarkMode} onChange={toggleDarkMode} />
		</ThemeProvider>
	);
}

export default App;
