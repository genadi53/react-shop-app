import { connect } from 'react-redux';
import {  createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';


const mapStateToProps = createStructuredSelector({
   isLoading: selectCollectionFetching
});

// compose works from right to left  <-----
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);
//connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;