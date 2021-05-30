import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.scss';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
    {
      
        collections.map(({ id, ...collectionProps }) => (
            <CollectionPreview key={id} {...collectionProps} />
        ))
    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionOverview);