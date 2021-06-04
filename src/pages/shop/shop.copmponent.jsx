import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPageContainer from '../collection/collection.container';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

//const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount(){
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
        //fetchCollectionsStartAsync2();
    }

    

    render(){
        const { match } = this.props;
        return(
            <div className="shopPage">
                <Route exact path={`${match.path}`}
                    //component={ CollectionOverview } 
                    // render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetchig} {...props} />}
                    component={ CollectionOverviewContainer }
                    />
                <Route path={`${match.path}/:collectionId`} 
                    //component= { CollectionPage }
                    //render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />}
                    component={ CollectionPageContainer }
                    />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
    // without redux-thunk
    // fetchCollectionsStartAsync2: fetchCollectionsStartAsync2(dispatch),
});

// const mapStateToProps = createStructuredSelector({
//     // isCollectionFetchig: selectCollectionFetching,
//     //isCollectionLoaded: selectCollectionLoaded
// })

export default connect(null, mapDispatchToProps)(ShopPage);