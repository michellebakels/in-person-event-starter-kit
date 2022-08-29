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
import EventSection from '@components/event-section';
import Layout from '@components/layout';

import { getAllEvents } from '@lib/cms-api';
import { Event } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  event: Event;
};

export default function EventPage({ event }: Props) {
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <EventSection event={event} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const events = await getAllEvents();
  const currentEvent = events.find((s: Event) => s.slug === slug) || null;

  if (!currentEvent) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      event: currentEvent
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getAllEvents();
  const slugs = events.map((s: Event) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false
  };
};
