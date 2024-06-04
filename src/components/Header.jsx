import { useContext, useState } from "react";
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
	const [btnName,setBtnName] = useState("Login")
	const onlineStatus =useOnlineStatus();
	const dataFromContext= useContext(UserContext);

	return (
		<div className="flex justify-between bg-pink-100 shadow-lg m-5 ">
			<div className="logo-container">
				<Link to="/">
					<img
						className="w-40 hover:scale-95 transition-transform duration-100 ease-in-out"
						src={LOGO_URL}
					/>
				</Link>
			</div>
			<div className="nav-items">
				<ul className="flex items-center p-9 m-5">
					<li className="px-4">
						Online Status:{onlineStatus ? "🟢" : "🔴"}
					</li>
					<li className="px-4 hover:scale-95 transition-transform duration-100 ease-in-out">
						<Link to="/">Home</Link>
					</li>
					<li className="px-4 hover:scale-95 transition-transform duration-100 ease-in-out">
						<Link to="/about">About Us</Link>
					</li>
					<li className="px-4 hover:scale-95 transition-transform duration-100 ease-in-out">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="px-4 hover:scale-95 transition-transform duration-100 ease-in-out">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="px-4">Cart</li>
					<button
						className="login hover:scale-95 transition-transform duration-100 ease-in-out"
						onClick={() => {
							btnName === "Login"
								? setBtnName("Logout")
								: setBtnName("Login");
						}}
					>
						{btnName}
					</button>
					<li className="px-4">{dataFromContext.loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;