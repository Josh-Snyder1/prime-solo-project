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
        console.log('in postFavorite saga', req.routeId)
        yield axios.post(`/api/favorites/${req.routeId}`);
        yield put ({ type: 'FETCH_FAVORITES'})
    }
    catch (err) {
        console.error('error in addFavorite saga is', err)
    };
};

function* deleteFavorite(req) {
    try {
        console.log('in deleteFavorite', req);
        yield axios.delete(`api/favorites/${req.routeId}`);
        yield put ({ type: 'FETCH_FAVORITES'})
    }
    catch (err) {
        console.error('error in deleteFavorites saga', err)
    }
}



function* favoritesSaga() {
    yield takeLatest('FETCH_FAVORITES', fetchFavorites);
    yield takeLatest('ADD_FAVORITE', addFavorite);
    yield takeLatest('DELETE_FAVORITE', deleteFavorite);
}

export default favoritesSaga;