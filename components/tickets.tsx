/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import cn from 'classnames';
import styles from './form.module.css';
import styleUtils from './utils.module.css';
import {TICKET_URL} from "@lib/constants";

type Props = {
  sharePage?: boolean;
};

export default function Tickets({ sharePage }: Props) {

  return (
    <div className={cn(styles.form, styleUtils.appear, {
      [styles['share-page']]: sharePage,
      [styleUtils['appear-fifth']]: !sharePage,
      [styleUtils['appear-third']]: sharePage
    })}>
      <div className={styles['form-row']}>
        <a
          href={TICKET_URL}
          target="_blank"
          className={cn(styles.submit, styles.register)}
        >
          Tickets
        </a>
      </div>
    </div>
  );
}