import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className="cart flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-4">Cart</h2>
			<button
				onClick={handleClearCart}
				className="mb-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
			>
				Clear
			</button>
			<div className="cart-items w-full">
				{cartItems.length > 0 ? (
					<ItemList items={cartItems} />
				) : (
					<p className="text-gray-600">Your cart is empty.</p>
				)}
			</div>
		</div>
	);
};

export default Cart;
