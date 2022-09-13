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
import {Job, Sponsorship, Company, Day, Speaker, Information, Event} from '@lib/types';

const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(query: string, { variables }: { variables?: Record<string, any> } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await res.json();
  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getInformation(): Promise<Information> {
  const data = await fetchCmsAPI(`
    {
      information {
        mainTitle
        mainDescription
        subTitle
        subDescription
      }
    }
  `);

  return data.information;
}

export async function getAllSpeakers(): Promise<Speaker[]> {
  const data = await fetchCmsAPI(`
    {
      allSpeakers(first: 100) {
        name
        bio
        title
        slug
        twitter
        github
        company
        talk {
          title
          description
        }
        image {
          url(imgixParams: {fm: jpg, fit: crop, w: 300, h: 400})
          blurDataURL: blurUpThumb
        }
        imageSquare: image {
          url(imgixParams: {fm: jpg, fit: crop, w: 192, h: 192})
          blurDataURL: blurUpThumb
        }
      }
    }
  `);

  return data.allSpeakers;
}

export async function getAllDays(): Promise<Day[]> {
  const data = await fetchCmsAPI(`
    {
      allDays(first: 100, orderBy: order_ASC) {
        name
        slug
        stream
        discord
        schedule {
          ... on TalkRecord {
            title
            start
            end
            speaker {
              name
              slug
              image {
                url(imgixParams: {fm: jpg, fit: crop, w: 120, h: 120})
                blurDataURL: blurUpThumb
              }
            }
          }
          ... on EventRecord {
            title
            start
            end
            location
            slug
          }
        }
      }
    }
  `);

  return data.allDays;
}

export async function getAllEvents(): Promise<Event[]> {
  const data = await fetchCmsAPI(`
    {
      allEvents {
        slug
        location
        end
        description
        start
        title
        image {
          url(imgixParams: {fm: jpg, fit: crop, w: 300, h: 400})
          blurDataURL: blurUpThumb
        }
        imageSquare: image {
          url(imgixParams: {fm: jpg, fit: crop, w: 192, h: 192})
          blurDataURL: blurUpThumb
        }
      }
    }
  `);

  return data.allEvents;
}

export async function getAllCompanies(): Promise<Company[]> {
  const data = await fetchCmsAPI(`
    {
      allCompanies(first: 100, orderBy: tierRank_ASC) {
        name
        description
        slug
        website
        callToAction
        callToActionLink
        discord
        youtubeSlug
        tier
        links {
          url
          text
        }
        cardImage {
          url(imgixParams: {fm: jpg, fit: crop})
        }
        logo {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100})
        }
      }
    }
  `);

  return data.allCompanies;
}

export async function getAllSponsorships(): Promise<Sponsorship[]> {
  const data = await fetchCmsAPI(`
    {
      allSponsorships(first: 100, orderBy: tierRank_ASC) {
        name
        description
        slug
        tier
        cardImage {
          url(imgixParams: {fm: jpg, fit: crop})
        }
      }
    }
  `);

  return data.allSponsorships;
}

export async function getAllJobs(): Promise<Job[]> {
  const data = await fetchCmsAPI(`
    {
      allJobs(first: 100, orderBy: rank_ASC) {
        id
        companyName
        title
        description
        discord
        link
        rank
      }
    }
  `);

  return data.allJobs;
}
