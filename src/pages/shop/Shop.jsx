import React, { Component } from "react";
import { SHOP_DATA } from "./shop.data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import "./Shop.scss";

class Shop extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            collections: SHOP_DATA
        };
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {/* <CollectionPreview items={this.state.collections} /> */}
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview
                        key={id}
                        items={id}
                        {...otherCollectionProps}
                    />
                ))}
            </div>
        );
    }
}
export default Shop;
