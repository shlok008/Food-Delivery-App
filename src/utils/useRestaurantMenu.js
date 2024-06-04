import { useEffect, useState } from "react";
import { REST_URL } from "../utils/constants";

const useRestaurantMenu = (resid) => {
	const [resInfo, setResInfo] = useState(null);
	useEffect(() => {
		fetchdata();
	}, []);

	const fetchdata = async () => {
		const data = await fetch(REST_URL + resid);
		const json = await data.json();
		setResInfo(json.data);
	};
	return resInfo;
};

export default useRestaurantMenu;
