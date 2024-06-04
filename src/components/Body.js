import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
	const [listOfRestaurant, setListOfRestaurant] = useState([]);
	const [filteredRestaurant, setFilteredRestaurant] = useState([]);
	const [searchText, setSearchText] = useState([]);
	const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const apidata = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.331821&lng=78.083556&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);

		const json = await apidata.json();
		// console.log(
		// 	json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
		// 		?.restaurants
		// );
		setListOfRestaurant(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
		setFilteredRestaurant(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	const onlineStatus = useOnlineStatus();
	const {loggedInUser,setUserName}= useContext(UserContext);
	if (onlineStatus === false) return <h1>Looks like your Internet broke</h1>;
	//CONDITIONAL RENDERING --> rendering on basis of condition
	return listOfRestaurant.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search-container m-4 p-4 flex items-center space-x-4">
					<div className="search flex items-center space-x-2">
						<input
							type="text"
							className="border border-solid border-black shadow-lg rounded-lg text-center hover:scale-95 transition-transform duration-100 ease-in-out"
							value={searchText}
							placeholder="SearchBox"
							onChange={(e) => {
								setSearchText(e.target.value);
								const filteredRes = listOfRestaurant?.filter(
									(res) =>
										res.info.name
											.toLowerCase()
											.includes(
												e.target.value.toLowerCase()
											)
								);
								setFilteredRestaurant(filteredRes);
							}}
						/>

						<button
							className="px-4 py-2 bg-green-200 m-2 rounded-lg hover:scale-95 transition-transform duration-100 ease-in-out"
							onClick={() => {
								const filteredRes = listOfRestaurant?.filter(
									(res) =>
										res.info.name
											.toLowerCase()
											.includes(searchText.toLowerCase())
								);
								setFilteredRestaurant(filteredRes);
							}}
						>
							Search
						</button>

						<button
							className=" px-4 py-2 bg-gray-300 rounded-lg hover:scale-95 transition-transform duration-100 ease-in-out"
							onClick={() => {
								const filteredList = listOfRestaurant?.filter(
									(res) => res.info.avgRating > 4.3
								);
								setFilteredRestaurant(filteredList);
							}}
						>
							Top Rated Restaurant
						</button>
						<input className="border border-black p-2" value={loggedInUser} 
							placeholder="UserName" onChange={(e)=> setUserName(e.target.value)}></input>
					</div>
				</div>
			</div>
			<div className="res-container flex flex-wrap m-5 justify-self-center">
				{/* <RestaurantCard resName="KFC" cuisine="Indian"></RestaurantCard>
				{RestaurantCard({resName : "Meghna Foods" , cuisine : "Indian"})}
				<RestaurantCard resName="MacDonalds" cuisine="Indian" />
				<RestaurantCard resName="KFC" cuisine="Indian"></RestaurantCard>
            {RestaurantCard({resName : "Meghna Foods" , cuisine : "Indian"})} 

                              DOING IT MANUALLY
				{<RestaurantCard resData={resList[0]}/>
				<RestaurantCard resData={resList[1]}/> */}

				{filteredRestaurant.map((restaurant) => (
					<Link
						key={restaurant.info.id}
						to={"/restaurants/" + restaurant.info.id}
					>
						{restaurant.info.aggregatedDiscountInfoV3
						? (
							<RestaurantCardPromoted resData={restaurant} />
						) : (
							<RestaurantCard resData={restaurant} />
						)}
					</Link>
				))}

				{/* key is required so  that react render only the new card instead or rerendering all the cards when new card comes */}
			</div>
		</div>
	);
};

export default Body;
