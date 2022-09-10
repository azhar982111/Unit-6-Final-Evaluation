import React from "react";
import ProductItem from "./ProductItem";
import "./Home.module.css"

function Products() {
    const [data, setData] = React.useState([]);

    fetch(`http://localhost:3002/products`)
        .then((response) => response.json())
        .then((jsondata) => { setData(jsondata) })

    console.log({data})
    return (
        <div>
            <table>
                <tr>
                    <th>Brand</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
                {data.map((item) => (
                <ProductItem 
                key={item.id}
                {...item}
                />
            ))}
            </table>
        </div>
    )
}

export default Products