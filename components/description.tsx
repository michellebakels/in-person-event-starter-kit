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

import React from 'react'
import cn from 'classnames';
import {GetStaticProps} from "next";
import {Information} from "@lib/types";
import {getAllInformation} from "@lib/cms-api";
import styles from './description.module.css';
import styleUtils from './utils.module.css';

type Props = {
  information: Information[];
}

export default function Description({ information }: Props) {
  return (
    <div>
      {information.map(info => (
        <p className={cn(styleUtils.container, styles.description)}>
          {info.description}
        </p>
      ))}
      <br/>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const information = await getAllInformation();

  return {
    props: {
      information
    },
    revalidate: 60
  };
};
