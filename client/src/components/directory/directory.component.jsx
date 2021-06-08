import React from 'react';
import { connect }  from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectsDirectorySection } from '../../redux/directory/directory.selectors';
import MenuItem from './../menu-item/menu-item.component';

import './directory.scss';

const Directory = ({ sections }) => {
    return(
        <div className="directory-menu">
            {
            sections.map(({ id, ...SectionProps }) => {
                return <MenuItem key={id} {...SectionProps}/>
            })
            }
        </div>
    );
}

const mapStateToProps =  createStructuredSelector({
    sections: selectsDirectorySection
})

export default connect(mapStateToProps)(Directory);