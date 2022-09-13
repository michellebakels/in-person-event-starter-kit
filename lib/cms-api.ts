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
import { Company, Information, Job, Sponsorship, Day, Speaker, Event } from '@lib/types';

import * as datoCmsApi from './dato';

const cmsApi: {
  getAllCompanies: () => Promise<Company[]>;
  getAllJobs: () => Promise<Job[]>;
  getInformation: () => Promise<Information>;
  getAllSpeakers: () => Promise<Speaker[]>;
  getAllSponsorships: () => Promise<Sponsorship[]>;
  getAllDays: () => Promise<Day[]>;
  getAllEvents: () => Promise<Event[]>;
} = datoCmsApi;

export async function getAllCompanies(): Promise<Company[]> {
  return cmsApi.getAllCompanies();
}

export async function getInformation(): Promise<Information> {
  return cmsApi.getInformation();
}

export async function getAllJobs(): Promise<Job[]> {
  return cmsApi.getAllJobs();
}

export async function getAllSpeakers(): Promise<Speaker[]> {
  return cmsApi.getAllSpeakers();
}

export async function getAllSponsorships(): Promise<Sponsorship[]> {
  return cmsApi.getAllSponsorships();
}

export async function getAllDays(): Promise<Day[]> {
  return cmsApi.getAllDays();
}

export async function getAllEvents(): Promise<Event[]> {
  return cmsApi.getAllEvents();
}
