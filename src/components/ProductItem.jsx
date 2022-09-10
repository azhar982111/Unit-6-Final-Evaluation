function ProductItem({ id, brand, title, image, category, price }) {
    return (
        <tr>
            <td>{brand}</td>
            <td>{title}</td>
            <td>{price}</td>
            <td><button>View</button></td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    )

}

export default ProductItem