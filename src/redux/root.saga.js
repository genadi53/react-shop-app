import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from '../redux/user/user.sagas';

export default function* rootSage() {
    yield all([
        //yield fetchCollectionsStart();
        call(fetchCollectionsStart),
        call(userSagas),
    ])
}