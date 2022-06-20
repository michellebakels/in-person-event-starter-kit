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

import Page from '@components/page';
import Header from '@components/header';
import Layout from '@components/layout';
import React from 'react';
import { META_DESCRIPTION } from '@lib/constants';
import Description from "@components/description";
import {GetStaticProps} from "next";
import {getAllInformation} from "@lib/cms-api";
import {Information} from "@lib/types";

type Props = {
  information: Information[];
}

export default function About({ information }: Props) {
  const meta = {
    title: 'About',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="About" description={meta.description} />
        <Description information={information}/>
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const information = await getAllInformation();

  return {
    props: {
      information
    },
    revalidate: 60
  };
};
