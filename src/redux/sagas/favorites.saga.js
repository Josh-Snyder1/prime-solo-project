import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchFavorites() {

};

function* addFavorite() {
    try {
        console.log('in postFavorite saga', req.payload)
        yield axios.post('/api/favorite', req.payload);
        yield put ({ type: 'FETCH_FAVORITES'})
    }
    catch (err) {
        console.error('error in addFavorite is', err)
    };
};



function* favoritesSaga() {
    yield takeLatest('FETCH_FAVORITES', fetchFavorites);
    yield takeLatest('ADD_FAVORITE', addFavorite);
}

export default favoritesSaga;