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

import HttpService from "../core/services/http_service";
import ConfigService, { ConfigKey } from "../core/services/config_service";

/**
 * @class MovieServices
 * @description MovieServices class is used to get the popular movies
 * @exports MovieServices
 * @constructor
 * @param {void}
 * @returns {MovieServices} MovieServices instance
 */
class MovieServices {
  constructor() {
    if (!MovieServices.instance) {
      MovieServices.instance = this;
    }
    return MovieServices.instance;
  }

  header() {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${ConfigService.get(ConfigKey.app.token)}`,
    };
  }

  /**
   * @method getPoularMovies
   * @description getPoularMovies method is used to get the popular movies
   * @param {void}
   * @returns {void}
   * @memberof MovieServices
   * @instance
   * @inner
   * @public
   * @async
   * @example
   * MovieServices.getPoularMovies();
   * @see {@link https://developers.themoviedb.org/3/movies/get-popular-movies|get-popular-movies}
   * @see {@link https://developers.themoviedb.org/3/getting-started/introduction|getting-started}
   * @see {@link https://developers.themoviedb.org/3/getting-started/authorization|authorization}
   * */
  async getPoularMovies() {
    const url = `${ConfigService.get(ConfigKey.api.base)}${ConfigService.get(
      ConfigKey.api.popular
    )}`;
    const response = await HttpService.get(url, this.header());
    return response;
  }

  async getTrendingMovies() {
    const url = `${ConfigService.get(ConfigKey.api.base)}${ConfigService.get(
      ConfigKey.api.trending
    )}`;
    const response = await HttpService.get(url, this.header());
    return response;
  }
}

const instance = new MovieServices();
Object.freeze(instance);

export default instance;
