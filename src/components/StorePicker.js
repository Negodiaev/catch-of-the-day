import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <form action="" className="store-selector">
                <h2>Please enter a store</h2>
                <input type="text" placeholder="Store name" required />
                <button type="submit">Visit store &rarr;</button>
            </form>
        );
    }
}

export default StorePicker;
