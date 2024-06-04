import { CON_URL } from "../utils/constants";

// const styleCard = {
// 	backgroundColor: "#f0f0f0",
// };

// const RestaurantCard =({resName, cuisines,... }) =>{
const RestaurantCard = (props) => {
	const { resData } = props;
	const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
		resData.info;
	return (
		<div className="shadow-lg m-3 p-3 w-[240px] bg-gray-200 rounded-lg hover:scale-95 hover:bg-gray-300  transition-transform duration-100 ease-in-out">
			{" "}
			{/*style={styleCard}>*/}
			{/* </div><div className="res-card" style={{backgroundColor: "#f0f0f0"}}>  */}
			<img
				className="res-logo rounded-lg"
				alt="res-logo"
				src={CON_URL + resData.info.cloudinaryImageId}
			/>
			<h3 className="text-lg font-bold mt-2">{name}</h3>
			<h4 className="text-sm text-gray-700">{cuisines.join(", ")}</h4>
			<h4 className="text-sm text-gray-700">{avgRating}</h4>
			<h4 className="text-sm text-gray-700">{costForTwo}</h4>
			<h4 className="text-sm text-gray-700">
				{resData.info.sla.deliveryTime} minutes
			</h4>
		</div>
	);
};

//HIGHER ORDER COMPONENT - INPUT IS A COMPONENT AND RETURNS A COMPONENT

export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		const {
			header = "",
			subHeader = "",
			discountTag = "",
		} = props.resData.info.aggregatedDiscountInfoV3 || {};
		return (
			<div>
				<label className="absolute bg-black text-white p-2 rounded-tl-lg bg-opacity-50 leading-5 m-2 text-sm">
					{header + " " + subHeader + " " + discountTag}
				</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
