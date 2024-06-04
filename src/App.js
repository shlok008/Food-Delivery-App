import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer.jsx";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
	const [userName, setUserName] = useState();

	//Authentication
	useEffect(() => {
		//API CALL for user data
		const data = {
			name: "Shlok Aggarwal",
		};
		setUserName(data.name);
	}, []);

	return (
		<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
			<div className="app">
				<Header />
				<Outlet />
			</div>
		</UserContext.Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: "",
				element: <Body />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "grocery",
				element: (
					<Suspense fallback={<Shimmer />}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "restaurants/:resId",
				element: <RestaurantMenu />,
			},
		],
	},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
