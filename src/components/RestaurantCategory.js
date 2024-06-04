import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
	const { title = "", itemCards = [] } = data; // Provide default values
	const [showItem,setShowItem] = useState(false);

	const handleClick =() =>{
		setShowItem(!showItem);
	}
	return (
		<div>
			{/* Header */}
			<div className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-t-lg cursor-pointer hover:bg-gray-200" onClick={handleClick}>
				<span className="text-lg font-semibold">
					{title} ({itemCards.length})
				</span>
				<span className="text-xl">⬇️</span>
			</div>

			{/* Accordion Body */}
			<div className="p-4 bg-gray-50 rounded-b-lg">
				{showItem && <ItemList items={data.itemCards}/> }
			</div>
		</div>
	);
};

export default RestaurantCategory;
