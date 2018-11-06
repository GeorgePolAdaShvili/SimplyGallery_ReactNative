import { _RequestAPI, _Urls } from '../../constants'

const actionStart = () => ({ type: _RequestAPI.start })
const actionSuccess = payload => ({ type: _RequestAPI.success, payload })
const actionError = payload => ({ type: _RequestAPI.error, payload })

const asyncFetchCall = async () => {
  try {
    const api_call = await fetch(_Urls.getItemList)
    return await api_call.json()
  } catch (e) {
    throw e
  }
}

export const fetchDataItemList = () => dispatch => {
  dispatch(actionStart())
  asyncFetchCall()
    .then(response => dispatch(actionSuccess(response)))
    .catch(() => dispatch(actionError()))
}
