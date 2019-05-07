import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
    static propTypes = {
        fish: PropTypes.shape({
            name: PropTypes.string,
            desc: PropTypes.string,
            image: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        index: PropTypes.string,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func
    };

    handleChange = event => {
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish);
    };
    render() {
        return (
            <div className="fish-edit">
                <input name="name" value={this.props.fish.name} onChange={this.handleChange} type="text" />
                <input name="price" value={this.props.fish.price} onChange={this.handleChange} type="text" />
                <select name="status" value={this.props.fish.status} onChange={this.handleChange}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" value={this.props.fish.desc} onChange={this.handleChange} />
                <input name="image" value={this.props.fish.image} type="text" onChange={this.handleChange} />
                <button onClick={() => this.props.deleteFish(this.props.index)}>Delete fish</button>
            </div>
        );
    }
}

export default EditFishForm;
