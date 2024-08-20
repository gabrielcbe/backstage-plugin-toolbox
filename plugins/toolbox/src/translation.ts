/*
 * Copyright 2024 The Backstage Authors
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
import { createTranslationRef } from '@backstage/core-plugin-api/alpha';

/** @alpha */
export const toolboxTranslationRef = createTranslationRef({
  id: 'toolbox',
  messages: {
    toolsPage:{
        title: 'Toolbox',
        pageTitle: 'Toolbox',
        input:{
            search: 'Search'
        },
        tabPanel:{
            mainLabel: 'Toolbox',
            tooltipTitle: 'Open tool in new window'
        }
    },
    welcomePage: {
        introText: 'The toolbox contains commonly used tools for development and design. These tools include encoding, data generation, conversion tools, and other utilities to make work easier. All data is kept within this domain, so you don’t have to worry about your data getting into the wrong hands.',
        secondText: 'To select tools, click the cards below or use the left-side navigation.'
    }
  },
});