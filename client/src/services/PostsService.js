/* eslint-disable */
import Api from '@/services/Api'

export default {
  fetchCharInfo () {
    return Api().get('charInfo')
  },
  addCharInfo (params) {
    return Api().post('charInfo', params)
  },
  getCharInfo(params){
    return Api().get('charInfo/' + params.id)
  },
  updateCharInfo(params){
    return Api().put('charInfo/' + params.id, params)
  },
  deleteCharInfo(id){
    return Api().delete('charInfo/' + id)
  }
}