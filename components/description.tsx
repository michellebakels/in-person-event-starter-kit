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
      <br/>
      <div className={cn(styles['media-container'])}>
        <iframe
          className={cn(styles.video, styleUtils.appear, styleUtils['appear-first'])}
          allow="picture-in-picture"
          allowFullScreen
          frameBorder="0"
          height="100%"
          src={`https://youtube.com/embed/${information.youtubeSlug}`}
          width="100%"
        />
      </div>
      <br/>
      <br/>
      <h2 className={cn(styles.description, styles['description-title'], styleUtils.container)}>
        Ticket Schedule
      </h2>
      <br/>
      <p className={cn(styleUtils.container, styles.description)}>
        <div dangerouslySetInnerHTML={{ __html: information.ticketSchedule }} />
      </p>
      <br/>
      <h2 className={cn(styles.description, styles['description-title'], styleUtils.container)}>
        About the Organizers
      </h2>
      <br/>
      <div className={cn(styles.description, styleUtils.container)}>
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
