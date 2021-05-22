import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.scss';

const CollectionPreview = ({title, items}) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{ title }</h1>
            <div className="preview">
                { items
                    .filter((item, i) => i < 4)
                    .map(({id, ...itemProps}) => (
                      <CollectionItem key={id} {...itemProps} />
                    ))
            }
            </div>
        </div>
    );
}

export default CollectionPreview;