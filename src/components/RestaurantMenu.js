import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);
	if (resInfo === null) return <Shimmer />;

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[2]?.card?.card?.info;

	const category =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(c) =>
				c.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	return (
		<div className="menu max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
			<h1 className="text-4xl font-extrabold mb-4">{name}</h1>
			<h3 className="text-xl text-gray-600 mb-2">
				{cuisines.join(", ")}
			</h3>
			<h3 className="text-xl text-gray-600 mb-6">{costForTwoMessage}</h3>
			<h2 className="text-2xl font-bold mb-4">MENU</h2>

			{/* category accordion */}
			{category.map((category) => (
				<RestaurantCategory
					key={category?.card?.card.title}
					data={category?.card?.card}
				/>
			))}
		</div>
	);
};
export default RestaurantMenu;
