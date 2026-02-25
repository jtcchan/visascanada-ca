import { MetadataRoute } from 'next'

const BASE_URL = 'https://visascanada.ca'
const LAST_MOD = '2026-02-18'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Home
    {
      url: `${BASE_URL}`,
      lastModified: LAST_MOD,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Primary CTA
    {
      url: `${BASE_URL}/start-your-application`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Post-Graduate Work Permit (PGWP)
    {
      url: `${BASE_URL}/pgwp/apply`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pgwp/extension`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/post-graduate-work-permit/apply`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/post-graduate-work-permit/extension`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Study Permit
    {
      url: `${BASE_URL}/study-permit/apply`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/study-permit/extension`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/study-permit/start-questionnaire`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/study-permit/new/start-questionnaire`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Temporary Resident Visa
    {
      url: `${BASE_URL}/temporary-resident-visa/apply`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/temporary-resident-visa/extension`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/temporary-resident-visa/start-questionnaire`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // TRV aliases
    {
      url: `${BASE_URL}/trv/canada`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/trv/extension`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Visitor Visas
    {
      url: `${BASE_URL}/visitor-visas/apply`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/visitor-visas/extension`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Work Permit
    {
      url: `${BASE_URL}/work-permit/apply`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/work-permit/extension`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/work-permit/renewal`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/work-permit/start-questionnaire`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Work Visa
    {
      url: `${BASE_URL}/work-visa/apply`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Stream A
    {
      url: `${BASE_URL}/stream-a/apply`,
      lastModified: LAST_MOD,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Policy pages
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/refund-policy`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: LAST_MOD,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
