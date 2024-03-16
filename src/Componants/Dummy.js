// //App.js

// import React, { useCallback, useState } from "react"
// import List from "./List"

// function App() {

// 	{/* Initial states */ }
// 	const [input, setInput] = useState(1);
// 	const [light, setLight] = useState(true);

// 	{/* useCallback memoizes the getItems() which 
// 	returns a list of number which is number+10
// 	and number + 100 */}
// 	const getItems = useCallback(() => {
// 		return [input + 10, input + 100];
// 	}, [input]);

// 	{/* style for changing the theme */ }
// 	const theme = {
// 		backgroundColor: light ? "White" : "grey",
// 		color: light ? "grey" : "white"
// 	}


// 	return <>
// 		{/* set the theme in the parent div */}
// 		<div style={theme}>
// 			<input type="number"
// 				value={input}

// 				{/* When we input a number it is stored in
// 			our stateful variable */}
// 				onChange={event =>
// 					setInput(parseInt(event.target.value))
// 				} />

// 			{/* on click the button the theme is set to 
// 			the opposite mode, light to dark and vice versa*/}
// 			<button onClick={() =>
// 				setLight(prevLight =>
// 					!prevLight)}>{light ? "dark mode" : "light mode"}
// 			</button>
// 			<List getItems={getItems} />
// 		</div>
// 	</>;
// }

// // export default App;
