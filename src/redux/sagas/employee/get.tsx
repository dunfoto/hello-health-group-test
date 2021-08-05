import axios from 'src/utils/axios'
import { takeLatest, put, select, call } from 'redux-saga/effects'
import { GET_EMPLOYEE, GET_EMPLOYEE_SAGA } from 'src/redux/reducers/employee'
import { EmployeeTypes } from 'src/redux/types'
import { Pagination } from 'src/types'

function* getUsersSaga() {
    try {
        const {
                employee: { pagination },
            } = yield select(),
            data: { data: EmployeeTypes[]; total: number } = yield call(getUsersAPI, pagination)
        yield put({
            type: GET_EMPLOYEE_SAGA,
            data: data.data,
            total: data.total,
        })
    } catch (err) {
        console.log(err)
    }
}
function* getUsers() {
    yield takeLatest(GET_EMPLOYEE, getUsersSaga)
}

export default getUsers

const getUsersAPI = async (pagination: Pagination) => {
    try {
        const res = await axios.get(`/users?limit=${pagination.limit}&page=${pagination.page}`)
        return res.data
    } catch (err) {
        console.log(err)
        return []
    }
}
