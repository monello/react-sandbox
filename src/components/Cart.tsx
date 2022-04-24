import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./Cart.modules.css";

interface Props {}

interface State {
    isOpen: boolean;
}

// The React component takes 3 type Parameters
// - P = Type of the props
// - S = Type of the state
// - SS = Snapshot of the DOM. Some custom data that you can return from the getSnapshotbeforeUpdate() lifecycle method
//        You can use this to capture some DOM information before you render to the DOM, like for example Scroll Position
//        Basically you return some information from this method and React will pass it along to the componentDidUpdate()
//          so you can use it there after the component re-renders
class Cart extends React.Component<Props, State> {
    // When you use React clases you need to use the classes API
    // You will need a constuctor and inside the constructor you mustcall super()
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    // This is how you re-rener the component in Class-based components
    render(): React.ReactNode {
        return (
            <div className={styles.cartContainer}>
                <button className={styles.button} type="button">
                    <FiShoppingCart />
                    <span>2 pizzas</span>
                </button>
                <div className={styles.cartDropDown}>
                    <ul>
                        <li>Napoletana</li>
                        <li>Matinanara</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Cart;
