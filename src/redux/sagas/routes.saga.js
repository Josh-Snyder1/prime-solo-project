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

function* routesSaga() {
    yield takeLatest('FETCH_ROUTES', fetchRoutes);
}

export default routesSaga;