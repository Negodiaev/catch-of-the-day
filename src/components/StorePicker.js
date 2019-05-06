import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    storeInput = React.createRef();

    goToStore = event => {
        event.preventDefault();

        const storeName = this.storeInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    };
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input
                    type="text"
                    ref={this.storeInput}
                    defaultValue={getFunName()}
                    placeholder="Store name"
                    required
                />
                <button type="submit">Visit store &rarr;</button>
            </form>
        );
    }
}

export default StorePicker;
