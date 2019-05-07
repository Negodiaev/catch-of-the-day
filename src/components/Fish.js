import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            name: PropTypes.string,
            desc: PropTypes.string,
            image: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        index: PropTypes.string,
        addToOrder: PropTypes.func
    };

    render() {
        const { name, image, price, desc, status } = this.props.details;
        const isAvailable = status === "available";
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
                    {isAvailable ? "Add to cart" : "Sold out!"}
                </button>
            </li>
        );
    }
}

export default Fish;
