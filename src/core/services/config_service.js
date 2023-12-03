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
import Config from "./env.json";

/**
 * ConfigKey is a enum for ConfigService
 * @type {Object}
 * @property {Object} app
 * @property {Object} api
 *
 */
const ConfigKey = {
  app: {
    token: "app.token",
  },
  api: {
    base: "api.base",
    popular: "api.popular",
    trending: "api.trending",
  },
};

/**
 * ConfigService is a singleton class for accessing the config values
 * @class
 * @example
 * import ConfigService, { ConfigKey } from "./config";
 * ConfigService.get(ConfigKey.api.base);
 */
class ConfigService {
  /**
   * @constructor
   * @returns {ConfigService}
   * @example
   * import ConfigService, { ConfigKey } from "./config";
   * */
  constructor() {
    if (ConfigService.instance) {
      return ConfigService.instance;
    }
    ConfigService.instance = this;
    return this;
  }

  /**
   * @param {string} key - key to get the value from config
   * @returns {string} - value from config
   * @example
   * import ConfigService, { ConfigKey } from "./config";
   * ConfigService.get(ConfigKey.api.base);
   * */
  get(key) {
    return this._get(key);
  }

  /**
   * @param {string} key - key to get the value from config
   * @returns {string} - value from config
   * */
  _get(key) {
    const keys = key.split(".");
    let value = Config;
    keys.forEach((key) => {
      value = value[key];
    });
    return value;
  }
}

export default new ConfigService();
export { ConfigKey };
