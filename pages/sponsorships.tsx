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

import { GetStaticProps } from 'next';

import Page from '@components/page';
import SponsorshipsGrid from '@components/sponsorships-grid';
import Header from '@components/header';
import Layout from '@components/layout';

import { getAllSponsorships } from '@lib/cms-api';
import { Sponsorship } from '@lib/types';
import React from 'react';

type Props = {
  sponsorships: Sponsorship[];
};

export default function Sponsorships({ sponsorships }: Props) {
  const meta = {
    title: 'Sponsorships',
    description: 'Become an official sponsor of React Miami 2022'
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Sponsorships" description={meta.description} />
        <SponsorshipsGrid sponsorships={sponsorships} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const sponsorships = await getAllSponsorships();

  return {
    props: {
      sponsorships
    },
    revalidate: 60
  };
};
