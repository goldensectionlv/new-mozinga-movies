import axios from 'axios'
import cookie from '@/store/cookie'

const mainUrl = 'https://mozingabackend.herokuapp.com/api/'

export default {
  async createdHome () {
    const check = localStorage.getItem('token')
    let response
    if (check !== null) {
      response = await axios.get(mainUrl + 'api_created_home', { headers: { Authorization: `token ${check}` } })
        .catch((error) => {
          if (error.response.status === 401) {
            localStorage.clear()
            alert('Кажись разлогинило. Перезагрузите страницу.')
          }
        })
      return { response }
    } else {
      response = await axios.get(mainUrl + 'api_created_home', {
        withCredentials: true,
        crossDomain: true,
        headers: { device: cookie.getCookie('device') }
      })
      return { response }
    }
  },
  async buttonForwardOrBack (direction = '') {
    const check = localStorage.getItem('token')
    if (check !== null) {
      const response = await axios.get(mainUrl + 'button_forward_or_back/' + direction, {
        headers: { Authorization: `token ${check}` }
      })
      return { response }
    } else {
      const response = await axios.get(mainUrl + 'button_forward_or_back/' + direction, {
        withCredentials: true,
        crossDomain: true,
        headers: { device: cookie.getCookie('device') }
      })
      return { response }
    }
  },
  async likeOrDislike (args = { movie_id: null, action: '' }) {
    const check = localStorage.getItem('token')
    if (check !== null) {
      const response = await axios.get(mainUrl + 'api_like_or_dislike/' + args.movie_id + '/' + args.action, {
        headers: { Authorization: `token ${check}` }
      })
      return { response }
    } else {
      const response = await axios.get(mainUrl + 'api_like_or_dislike/' + args.movie_id + '/' + args.action, {
        withCredentials: true,
        crossDomain: true,
        headers: { device: cookie.getCookie('device') }
      })
      return { response }
    }
  },

  async adToWatchedOrWatchlist (args = { movie_id: null, action: '' }) {
    const check = localStorage.getItem('token')
    if (check !== null) {
      const response = await axios.get(mainUrl + 'add_to_watched_or_watchlist/' + args.movie_id + '/' + args.action, {
        headers: { Authorization: `token ${check}` }
      })
      return { response }
    } else {
      const response = await axios.get(mainUrl + 'add_to_watched_or_watchlist/' + args.movie_id + '/' + args.action, {
        withCredentials: true,
        crossDomain: true,
        headers: { device: cookie.getCookie('device') }
      })
      return { response }
    }
  },

  async getWatchlist (size) {
    const check = localStorage.getItem('token')
    if (check !== null) {
      const response = await axios.get(mainUrl + 'api_watchlist/' + size, {
        headers: { Authorization: `token ${check}` }
      })
      return { response }
    } else {
      const response = await axios.get(mainUrl + 'api_watchlist/' + size, {
        withCredentials: true,
        crossDomain: true,
        headers: { device: cookie.getCookie('device') }
      })
      return { response }
    }
  },

  async getWatchedList (listType) {
    const check = localStorage.getItem('token')
    let response = []
    if (check !== null) {
      response = await axios.get(mainUrl + 'api_watched/' + listType, {
        headers: { Authorization: `token ${check}` }
      })
    } else {
      response = await axios.get(mainUrl + 'api_watched/' + listType, {
        withCredentials: true,
        crossDomain: true,
        headers: { device: cookie.getCookie('device') }
      })
    }
    return { response }
  },
  async recommendSliced () {
    const check = localStorage.getItem('token')
    if (check !== null) {
      const response = await axios.get(mainUrl + 'api_recommend_script_sliced', {
        headers: { Authorization: `token ${check}` }
      })
      return { response }
    } else {
      const response = await axios.get(mainUrl + 'api_recommend_script_sliced', {
        withCredentials: true,
        crossDomain: true,
        headers: { device: cookie.getCookie('device') }
      })
      return { response }
    }
  },
  async login (username, password) {
    const response = await axios.post(mainUrl + 'api_login_view', {
      username: username,
      password: password
    }, {
      withCredentials: true,
      crossDomain: true,
      headers: { device: cookie.getCookie('device') }
    })
    return { response }
  },

  async deleteAnonymous () {
    await axios.get(mainUrl + 'api_delete_anonymous', {
      withCredentials: true,
      crossDomain: true,
      headers: { device: cookie.getCookie('device') }
    })
  },

  async register (username, email, password, password2) {
    const response = await axios.post(mainUrl + 'api_registration_view', {
      username: username,
      email: email,
      password: password,
      password2: password2
    }, {
      withCredentials: true,
      crossDomain: true,
      headers: { device: cookie.getCookie('device') }
    })
    return { response }
  },

  async getMovie (id) {
    const check = localStorage.getItem('token')
    if (check !== null) {
      const response = await axios.get(mainUrl + 'api_get_movie/' + id, {
        headers: { Authorization: `token ${check}` }
      })
      return { response }
    } else {
      const response = await axios.get(mainUrl + 'api_get_movie/' + id, {
        withCredentials: true,
        crossDomain: true,
        headers: { device: cookie.getCookie('device') }
      })
      return { response }
    }
  }
}
