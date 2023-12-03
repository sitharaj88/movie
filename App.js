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

import { Provider } from "react-redux";
import store from "./src/state";
import AppNavigation from "./src/view/navigation";
import { GluestackUIProvider} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider theme={config.theme}>
        <AppNavigation />
      </GluestackUIProvider>
    </Provider>
  );
}
