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
import Image from 'next/image'
import cn from 'classnames';
import styles from './description.module.css';
import styleUtils from './utils.module.css';
import { Information } from "@lib/types";

type Props = {
  information: Information;
}

export default function Description({ information }: Props) {
  return (
    <div>
      <h2 className={cn(styles.description, styles['description-title'], styleUtils.container)}>
        {information.mainTitle}
      </h2>
      <p className={cn(styleUtils.container, styles.description)}>
        {information.mainDescription}
      </p>
      <br/>
      <div className={cn(styles['media-container'], styleUtils.container)}>
        {information.eventImages.map((image) => {
          return (
          <Image
            src={image.url}
            alt={image.alt}
            height={253}
            width={450}
          />
          )})}
      </div>
      <br/>
      <h2 className={cn(styles.description, styles['description-title'], styleUtils.container)}>
        {information.subTitle}
      </h2>
      <p className={cn(styleUtils.container, styles.description)}>
        {information.subDescription}
      </p>
      <div className={cn(styles['media-container'])}>
        <iframe width="560" height="315"
                src={information.eventVideo.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={cn(styles.video)}
        >
        </iframe>
      </div>
      <br/>
      <br/>
      <p className={cn(styleUtils.container, styles.description)}>
        <div dangerouslySetInnerHTML={{ __html: information.ticketSchedule }} />
      </p>
      <br/>
      <div className={cn(styleUtils.container)}>
        {information.organizers.map((organizer) => {
          return (
            <div className={cn(styles.bio)}>
            <div className={cn(styles['logo-container'])}>
              <a href={organizer.website} target="_blank">
                <Image
                  src={organizer.logo.url}
                  alt={`${organizer.name} logo`}
                  height={150}
                  width={150}
                />
              </a>
            </div>
            <h3>{organizer.name}</h3>
            <p>
              {organizer.description}
            </p>
          </div>
          )})
        }
      </div>
    </div>
  );
};
