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

import { GetStaticProps, GetStaticPaths } from 'next';

import Page from '@components/page';
import DayContainer from '@components/day-container';
import Layout from '@components/layout';

import { getAllDays } from '@lib/cms-api';
import { Day } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  day: Day;
  allDays: Day[];
};

export default function DayPage({ day, allDays }: Props) {
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta} fullViewport>
      <Layout>
        <DayContainer day={day} allDays={allDays} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const days = await getAllDays();
  const day = days.find((s: Day) => s.slug === slug) || null;

  if (!day) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      day,
      allDays: days
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const days = await getAllDays();
  const slugs = days.map((s: Day) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false
  };
};