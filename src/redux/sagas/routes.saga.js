import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRoutes() {
    try {
        const res = yield axios.get('/api/routes');
        yield put ({ type: 'SET_ROUTES', payload: res.data})
    }
    catch (err) {
        console.error('error is', err)
    };
};

function* fetchTopRoutes() {
    try {
        const res = yield axios.get('/api/routes/top');
        yield put ({ type: 'SET_TOP_ROUTES', payload: res.data})
    }
    catch (err) {
        console.error('error in get top routes', err)
    }
}

function* fetchRouteDetails(req) {
    try {
        const res = yield axios.get(`/api/routes/${req.payload}`)
        yield put ({ type: 'SET_ROUTE_DETAIL', payload: req.params})
    }
    catch (err) {
        console.error('error in get route details',err)
    }
}

function* routesSaga() {
    yield takeLatest('FETCH_ROUTES', fetchRoutes);
    yield takeLatest('FETCH_TOP_ROUTES', fetchTopRoutes)
    yield takeLatest('FETCH_ROUTE_DETAILS', fetchRouteDetails)
}

export default routesSaga;