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

import Link from 'next/link';
import Image from 'next/image';
import { Event } from '@lib/types';
import styles from './event-section.module.css';

type Props = {
  event: Event;
};

export default function EventSection({ event }: Props) {
  return (
    <>
      <Link href="/schedule">
        <a className={styles.backlink}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to schedule
        </a>
      </Link>
      <div key={event.title} className={styles.container}>
        <div style={{ minWidth: '300px' }}>
          <Image
            alt={event.title}
            title={event.title}
            src={event.image.url}
            className={styles.image}
            loading="lazy"
            height={400}
            width={300}
          />
        </div>
        <div className={styles['event-details']}>
          <div>
            <h1 className={styles.name}>{event.title}</h1>
            <p className={styles.title}>
              <span className={styles.location}>{event.location}</span>
            </p>
            <h2 className={styles['description-header']}>Description</h2>
            <p className={styles.description}>{event.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
