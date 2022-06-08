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
import cn from 'classnames';
import { Sponsorship } from '@lib/types';
import styles from './sponsorships-grid.module.css';

function SponsorshipCard({ sponsorship }: { sponsorship: Sponsorship }) {
  return (
    <Link key={sponsorship.name} href={`/expo/${sponsorship.slug}`}>
      <a
        role="button"
        tabIndex={0}
        className={cn(styles.card, {
          [styles.diamond]: sponsorship.tier === 'diamond',
          [styles.gold]: sponsorship.tier === 'gold'
        })}
      >
        <div className={styles.imageWrapper}>
          <Image
            alt={sponsorship.name}
            src={sponsorship.cardImage.url}
            className={cn(styles.image, {
              [styles.silver]: sponsorship.tier === 'silver'
            })}
            loading="lazy"
            title={sponsorship.name}
            width={900}
            height={500}
          />
        </div>
        {sponsorship.tier !== 'silver' && (
          <div className={styles.cardBody}>
            <div>
              <h2 className={styles.name}>{sponsorship.name}</h2>
              <p className={styles.description}>{sponsorship.description}</p>
            </div>
          </div>
        )}
      </a>
    </Link>
  );
}

type Props = {
  sponsorships: Sponsorship[];
};

export default function SponshorshipsGrid({ sponsorships }: Props) {
  const silvercompanies = sponsorships.filter(s => s.tier === 'silver');
  const othercompanies = sponsorships.filter(s => s.tier !== 'silver');

  return (
    <>
      <div className={styles.grid}>
        {othercompanies.map(sponsorship => (
          <SponsorshipCard key={sponsorship.name} company={sponsorship} />
        ))}
      </div>
      <div className={styles.grid}>
        {silvercompanies.map(sponsorship => (
          <SponsorshipCard key={sponsorship.name} sponsorship={sponsorship} />
        ))}
      </div>
    </>
  );
}
