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
  }
}
