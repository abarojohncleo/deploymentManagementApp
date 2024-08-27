import axios from 'axios';

const getCookie = (name) => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      let cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
};


const get_default_headers = () => {
  return {
    'Content-Type': 'application/json'
  };
}

const request = async (method, url, data = {}, customHeaders = {}) => {
  const headers = { ...get_default_headers(), ...customHeaders };

  const config = {
    method: method.toUpperCase(),
    url: url,
    headers: headers,
    data: data,
    withCredentials: true,
  };

  if (method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE') {
    config.params = data;
  } else {
    config.data = data;
  }

  return await axios(config)
    .then(response => response.data)
    .catch(error => {
      Promise.reject(error)
    });
}

// Methods for each HTTP verb
request.get = (url, params = {}, customHeaders = {}) => {
  return request('GET', url, params, customHeaders);
}

request.post = (url, data = {}, customHeaders = {}) => {
  return request('POST', url, data, customHeaders);
}

request.put = (url, data = {}, customHeaders = {}) => {
  return request('PUT', url, data, customHeaders);
}

request.patch = (url, data = {}, customHeaders = {}) => {
  return request('PATCH', url, data, customHeaders);
}

request.delete = (url, data = {}, customHeaders = {}) => {
  return request('DELETE', url, data, customHeaders);
}

export default request;
