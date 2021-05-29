import SECTIONS_DATA  from './sections.data';

const initialState = {
    sections: SECTIONS_DATA
}

const directoryReducer = (state = initialState, action) => {
    switch(action.type){

        default: return state;
    }
}

export default directoryReducer;