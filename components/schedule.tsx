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
import { Day, Talk } from '@lib/types';
import styles from './schedule.module.css';
import TalkCard from './talk-card';

function DayRow({ day }: { day: Day }) {
  // Group talks by the time block
  const timeBlocks = day.schedule.reduce((allBlocks: any, scheduledEvent) => {
    allBlocks[scheduledEvent.start] = [...(allBlocks[scheduledEvent.start] || []), scheduledEvent];
    return allBlocks;
  }, {});

  return (
    <div key={day.name} className={styles.row}>
      <h3 className={cn(styles['day-name'], styles[day.slug])}>
        <span>{day.name}</span>
      </h3>
      <div className={cn(styles.talks, styles[day.slug])}>
        {Object.keys(timeBlocks).map((startTime: string) => (
          <div key={startTime}>
            {timeBlocks[startTime].map((talk: Talk, index: number) => (
              <TalkCard key={talk.title} talk={talk} showTime={index === 0} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  allDays: Day[];
};

export default function Schedule({ allDays }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles['row-wrapper']}>
        {allDays.map(day => (
          <DayRow key={day.slug} day={day} />
        ))}
      </div>
    </div>
  );
}
