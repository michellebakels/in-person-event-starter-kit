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

export type Image = {
  url: string;
  blurDataURL?: string;
  alt?: string;
};

export type Video = {
  url: string;
  thumbnailURL?: string;
};

export type Organizers = {
  logo: Image;
  name: string;
  description: string;
  website: string;
}


export type Speaker = {
  name: string;
  bio: string;
  title: string;
  slug: string;
  twitter: string;
  github: string;
  company: string;
  talk: Talk;
  image: Image;
  imageSquare: Image;
};

export type Day = {
  name: string;
  slug: string;
  stream: string;
  discord: string;
  schedule: ScheduledEvent[];
};

export type Talk = {
  title: string;
  description: string;
  start: string;
  end: string;
  speaker: Speaker[];
};

export type Event = {
  title: string;
  description: string;
  start: string;
  end: string;
  location: string;
  slug: string;
  image: Image;
  imageSquare: Image;
};

export type ScheduledEvent = Talk & Event;

export type Link = {
  url: string;
};

export type Sponsorship = {
  name: string;
  description: string;
  slug: string;
  tier: string;
  cardImage: Image;
};

export type Company = {
  name: string;
  description: string;
  slug: string;
  website: string;
  callToAction: string;
  callToActionLink: string;
  links: CompanyLink[];
  discord: string;
  tier: string;
  cardImage: Image;
  logo: Image;
  youtubeSlug: string;
};

export type CompanyLink = {
  text: string;
  url: string;
};

export type Job = {
  id: string;
  companyName: string;
  title: string;
  description: string;
  discord: string;
  link: string;
  rank: number;
};

export type Information = {
  mainTitle: string;
  mainDescription: string;
  subTitle: string;
  subDescription: string;
  ticketSchedule: string;
  eventImages: Image[];
  eventVideo: Video;
  organizers: Organizers[];
};

export type ConfUser = {
  id?: string;
  email: string;
  ticketNumber: number;
  name?: string;
  username?: string;
  createdAt: number;
};

export type GitHubOAuthData =
  | {
      type: 'token';
      token: string;
    }
  | {
      type: 'user';
      name: string;
      login: string;
    };
