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

import err from "./error.json";

class ErrorService {
  constructor() {
    if (!ErrorService.instance) {
      ErrorService.instance = this;
    }
    return ErrorService.instance;
  }

  getApiError(code, lang) {
    if (code && lang) {
      const error = err["api"][code];
      return { code: error.code, message: error.message[lang] };
    }
  }
}

const instance = new ErrorService();
Object.freeze(instance);

export default instance;
