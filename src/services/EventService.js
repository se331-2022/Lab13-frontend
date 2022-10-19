import apiClient from '@/services/AxiosClient.js'

export default {
  getEvents(perPage, page) {
    return apiClient({
      url: 'event?_limit=' + perPage + '&_page=' + page,
      baseURL: 'http://3.208.167.33:8999'
    })
  },
  getEvent(id) {
    return apiClient({
      url: 'event/' + id,
      baseURL: 'http://3.208.167.33:8999'
    })
  },
  saveEvent(event) {
    return apiClient({
      method: 'post',
      url: 'event',
      baseURL: 'http://3.208.167.33:8999',
      data: event
    })
  },
  getEventByKeyword(keyword, perPage, page) {
    return apiClient({
      url: 'event?_limit=' + perPage + '&_page=' + page + '&title=' + keyword,
      baseURL: 'http://3.208.167.33:8999'
    })
  },
  uploadFile(file) {
    let formData = new FormData()
    formData.append('file', file)
    return apiClient({
      method: 'post',
      url: 'uploadFile',
      baseURL: 'http://3.208.167.33:8999',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
