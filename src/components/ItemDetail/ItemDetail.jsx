import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import "./itemdetail.css"

const ItemDetail = ({ producto }) => {

    const [quantity, setQuantity] = useState(0)

    const onAdd = (cantidad) => {
        setQuantity(cantidad)
    }

    return (
        <>
            <div className="main-container">
                <div className="img-container">
                    <img src={producto.img} alt={producto.nombre} />
                </div>
                <div className="aside-container">
                    <div className="detalles-container">
                        <h2>{producto.nombre}</h2>
                        <p>Stock: {producto.stock}</p>
                        <p>Precio: {producto.precio.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>                        <p>Categoria: {producto.categoria}</p>
                        <p>Descripción: {producto.descripcion}</p>
                        {quantity
                            == 0 ?
                            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
                            :
                            <Link to={"/Cart"}>Ir al carrito</Link>
                        }
                    </div>

                </div>

            </div>

        </>
    );
};

export default ItemDetail;