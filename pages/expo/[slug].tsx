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
import CompanySection from '@components/company-section';
import Layout from '@components/layout';

import { getAllCompanies } from '@lib/cms-api';
import { Company } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  company: Company;
};

export default function CompanyPage({ company }: Props) {
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <CompanySection company={company} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const companies = await getAllCompanies();
  const company = companies.find((s: Company) => s.slug === slug) || null;

  if (!company) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      company
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const companies = await getAllCompanies();
  const slugs = companies.map((s: Company) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: 'blocking'
  };
};
