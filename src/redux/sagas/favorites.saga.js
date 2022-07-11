import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchFavorites() {
    try {
        console.log('in fetch favorites')
        const res = yield axios.get(`/api/favorites`);
        console.log('in fetchFavorites try', res)
        yield put ({ type: 'SET_FAVORITES', payload: res.data})
    }
    catch (err) {
        console.error('error in fetchFavorites', err)
    };
};

function* addFavorite(req) {
    try {
        console.log('in postFavorite saga', req.payload)
        yield axios.post('/api/favorites', req.payload);
        yield put ({ type: 'FETCH_FAVORITES'})
    }
    catch (err) {
        console.error('error in addFavorite saga is', err)
    };
};



function* favoritesSaga() {
    yield takeLatest('FETCH_FAVORITES', fetchFavorites);
    yield takeLatest('ADD_FAVORITE', addFavorite);
}

export default favoritesSaga;