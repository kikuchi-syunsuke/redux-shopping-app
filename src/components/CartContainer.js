import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
    const { amount, cartItems, total } = useSelector((state) => state.cart);
    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>買い物かご</h2>
                    <p className="empty-cart">なにも入ってません・・・🐱</p>
                </header>
            </section>
        );
    }
    return (
        <section className="cart">
            <header>
                <h2>買い物かご</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        合計<span>{total}円</span>
                    </h4>
                </div>
                <button className="btn clear-btn">全削除</button>
            </footer>
        </section>
    );
};

export default CartContainer;