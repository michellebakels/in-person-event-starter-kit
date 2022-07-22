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

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Day } from '@lib/types';
import styles from './schedule-sidebar.module.css';
import Select from './select';
import ScheduledEventCard from './scheduled-event-card';
import { SHORT_DATE } from '@lib/constants';

type Props = {
  allDays: Day[];
};

export default function ScheduleSidebar({ allDays }: Props) {
  const router = useRouter();
  const [currentDaySlug, setCurrentDaySlug] = useState(router.query.slug);
  const currentDay = allDays.find((s: Day) => s.slug === currentDaySlug);

  useEffect(() => {
    setCurrentDaySlug(router.query.slug);
  }, [router.query.slug]);

  return (
    <div className={styles.schedule}>
      <h3 className={styles.header}>Schedule</h3>
      <p>{SHORT_DATE}</p>
      <Select
        aria-label="Select a day"
        value={currentDaySlug}
        onChange={e => {
          const slug = e.target.value;
          setCurrentDaySlug(slug);
          router.push(`/day/${slug}`);
        }}
      >
        {allDays.map(day => (
          <option key={day.slug} value={day.slug}>
            {day.name}
          </option>
        ))}
      </Select>
      <div className={styles.talks}>
        {currentDay?.schedule.map(talk => (
          <ScheduledEventCard key={talk.title} talk={talk} showTime />
        ))}
      </div>
    </div>
  );
}
