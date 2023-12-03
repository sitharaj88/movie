/*
 * Copyright 2023 Sitharaj Seenivasan
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import axios from "axios";

/**
 * @author Sitharaj Seenivasan
 * HttpService
 * @class
 * @description Service for http requests
 * @exports HttpService
 * @version 1.0.0
 * @since 1.0.0
 * @example
 * import HttpService from 'core/services/http_service';
 * HttpService.get('http://example.com').then((response) => {   console.log(response); });
 */
class HttpService {
  /**
   * @constructor
   * @description Creates an instance of HttpService
   * @memberof HttpService
   * @returns {HttpService} HttpService instance
   */
  constructor() {
    if (HttpService.instance) {
      return HttpService.instance;
    }
    HttpService.instance = this;
    return this;
  }

  /**
   * @method
   * @description Http get request
   * @memberof HttpService
   * @param {string} url - Url
   * @param {object} headers - Headers
   * @returns {Promise} Promise
   * @example
   * HttpService.get('http://example.com').then((response) => {   console.log(response); });
   * */
  async get(url, headers) {
    const config = {
      method: "get",
      url,
      headers,
    };
    return await axios(config);
  }

  /**
   * @method
   * @description Http post request
   * @memberof HttpService
   * @param {string} url - Url
   * @param {object} data - Data
   * @param {object} headers - Headers
   * @returns {Promise} Promise
   * @example
   * HttpService.post('http://example.com', { name: 'John' }).then((response) => {   console.log(response); });
   */
  async post(url, data, headers) {
    const config = {
      method: "post",
      headers,
      url,
      data,
    };
    return await axios(config);
  }

  /**
   * @method
   * @description Http put request
   * @memberof HttpService
   * @param {string} url - Url
   * @param {object} data - Data
   * @param {object} headers - Headers
   * @returns {Promise} Promise
   * @example
   * HttpService.put('http://example.com', { name: 'John' }).then((response) => {   console.log(response); });
   * */
  async put(url, data, headers) {
    const config = {
      method: "put",
      headers,
      url,
      data,
    };

    return await axios(config);
  }

  /**
   * @method
   * @description Http patch request
   * @memberof HttpService
   * @param {string} url - Url
   * @param {object} data - Data
   * @param {object} headers - Headers
   * @returns {Promise} Promise
   * @example
   * HttpService.patch('http://example.com', { name: 'John' }).then((response) => {   console.log(response); });
   * */
  async delete(url, headers) {
    const config = {
      method: "delete",
      headers,
      url,
    };
    return await axios(config);
  }
}

export default new HttpService();
