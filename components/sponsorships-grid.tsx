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
import { Sponsorship } from '@lib/types';
import styles from './sponsorships-grid.module.css';

function SponsorshipCard({ sponsorship }: { sponsorship: Sponsorship }) {
  return (
    <a
      tabIndex={0}
      className={cn(styles.card)}
    >
      <div className={styles.cardBody}>
        <div>
          <h2 className={styles.name}>{sponsorship.name}</h2>
          <p className={styles.description}>{sponsorship.description}</p>
        </div>
      </div>
    </a>
  );
}

type Props = {
  sponsorships: Sponsorship[];
};

export default function SponsorshipsGrid({ sponsorships }: Props) {
  const sponsorshipPackages = sponsorships.sort((a, b) => {
    const sponsorshipA = a.slug.toLowerCase()
    const sponsorshipB = b.slug.toLowerCase()
    if (sponsorshipA < sponsorshipB) {
      return -1;
    }
    if (sponsorshipA > sponsorshipB) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div className={styles.grid}>
        {sponsorshipPackages.map(sponsorship => (
          <SponsorshipCard key={sponsorship.name} sponsorship={sponsorship} />
        ))}
      </div>
    </>
  );
}
