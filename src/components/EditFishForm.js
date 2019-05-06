import React from "react";

class EditFishForm extends React.Component {
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
