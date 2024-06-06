import { ITEM_IMG_URL } from "../utils/constants";
import {addItem} from "../utils/cartSlice";
import {useDispatch} from "react-redux";
const ItemList = ({ items }) => {
	const handleImageClick = (img) => {
		window.open(img);
	};

	const dispatch= useDispatch();
	const handleAddClick =(item) =>{
		//dispatch an action
		dispatch(addItem(item));

	}
	return (
		<ul className="space-y-5 ">
			{items.map((item) => (
				<li
					key={item.card.info.id}
					className="flex items-center p-5 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-300 hover:scale-95 transition-colors duration-200"
				>
					<div className="food-details flex-grow">
						<h4 className="food-name text-xl font-semibold mb-2">
							{item.card.info.name}
						</h4>
						<h5 className="food-price text-lg text-gray-700 mb-2">
							Rs. {item.card.info.price / 100}
						</h5>
						<p className="food-description text-md text-gray-600">
							{item.card.info.description}
						</p>
					</div>
					<img
						className="food-image w-32 h-32 rounded-lg object-cover mb-4 ml-4 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
						alt="item-image"
						onClick={() =>
							handleImageClick(
								ITEM_IMG_URL + item.card.info.imageId
							)
						}
						src={ITEM_IMG_URL + item.card.info.imageId}
					/>
					<button className="ml-auto bg-green-500 text-white p-2 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400" onClick={()=>handleAddClick(item)}>
						{" "}
						Add +
					</button>
				</li>
			))}
		</ul>
	);
};

export default ItemList;
