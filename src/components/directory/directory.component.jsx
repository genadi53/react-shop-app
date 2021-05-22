import React from 'react';
import MenuItem from './../menu-item/menu-item.component';
import SECTIONS_DATA  from './sections.data.js'
import './directory.scss';

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections : SECTIONS_DATA,
        }
    }

    render(){
        return(
            <div className="directory-menu">
            {
                this.state.sections.map(({id, ...SectionProps}) => {
                    return <MenuItem key={id} {...SectionProps}/>
                })
            }
            </div>
        );
    }
}

export default Directory;