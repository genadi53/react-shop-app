import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectsCollectons } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


const ShopPage = ({ collections }) => {
    return(
        <div className="shopPage">
            {
                collections.map(({ id, ...collectionProps }) => (
                    <CollectionPreview key={id} {...collectionProps} />
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectsCollectons
})

export default connect(mapStateToProps)(ShopPage);