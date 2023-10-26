import React from "react"
import "./itemlistcontainer.css"

const ItemListContainer = ({mensaje}) => {

    return (
        <h1 className="h1-greeting">{mensaje}</h1>
    )

}

export default ItemListContainer