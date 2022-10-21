import "./App.css";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/CartSlice";

function App() {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems]);

    return (
        <main>
            <Navbar />
            <CartContainer />
        </main>
    );
}

export default App;
