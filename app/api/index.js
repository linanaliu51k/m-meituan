import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
  return fetch(url, {
      credentials: 'include',
      headers: {
          'Accept': 'application/json, text/plain, */*'
      }
  }).then(res => res.json());
}

export function post(url, data) {
    return fetch(url, {
        method: 'POST',
        credentials: '',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res=>res.json());
}
