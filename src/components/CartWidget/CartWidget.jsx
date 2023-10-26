import React from "react";
import { BiCart } from 'react-icons/bi';
import "./cartwidget.css"

const CartWidget = () => {
    return (
        <div className="carrito">
            <BiCart size={1.7 * 16} /> {/* El tamaño predeterminado es de 16px, por lo que 2 * 16 = 32px */}
            <p className="p-carrito">0</p>
        </div>
    );
}

export default CartWidget;
