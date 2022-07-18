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

function* fetchRouteDetail(req) {
    try {
        const res = yield axios.get(`/api/routes/${req.payload}`)
        console.log('in fetchroutedetails saga', res)
        yield put ({ type: 'SET_ROUTE_DETAIL', payload: res.data})
    }
    catch (err) {
        console.error('error in get route details',err)
    }
}

function* addRoute(req) {
    try {
        console.log('in addRoute saga', req.payload)
        yield axios.post('/api/routes', req.payload);
    }
    catch (err) {
        console.error('error is', err)
    };
};

function* routesSaga() {
    yield takeLatest('FETCH_ROUTES', fetchRoutes);
    yield takeLatest('FETCH_TOP_ROUTES', fetchTopRoutes);
    yield takeLatest('FETCH_ROUTE_DETAIL', fetchRouteDetail);
    yield takeLatest('ADD_ROUTE', addRoute);
}

export default routesSaga;