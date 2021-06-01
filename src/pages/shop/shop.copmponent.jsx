import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPage from '../collection/collection.component';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { updateCollections } from '../../redux/shop/shop.actions';
import { firestore, convertCollectionsSnapstopToMap } from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };
    unsubscribeFromShapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        
        collectionRef.onSnapshot(async snapshot => {
            //console.log(snapshot);
            const collectionsMap = convertCollectionsSnapstopToMap(snapshot);
            //console.log(collectionsMap);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        })
    }



    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return(
            <div className="shopPage">
                <Route exact path={`${match.path}`}
                    //component={ CollectionOverview } 
                    render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
                    />
                <Route path={`${match.path}/:collectionId`} 
                    //component= { CollectionPage }
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
                    />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);