import { defineCollection, z } from 'astro:content';

const nieuws = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    auteur: z.string().optional(),
    image: z.string().optional(),          // Bestandsnaam in /public, bijv. "nieuws/mijnfoto.jpg"
    linkedin_tekst: z.string().optional(), // Tekst voor LinkedIn post (max ~700 tekens aanbevolen)
  }),
});

export const onderwerpen = [
  'Automatische spraakherkenning',
  'Spraaksynthese',
  'Spreker- en taalherkenning',
  'Gesproken taalbegrip & dialoog',
  'Spraakverbetering & -codering',
  'Meertalig & laagresource',
  'Spraak & gezondheid',
  'Paralinguïstiek & emotie',
  'Fonetiek & prosodie',
  'Taalbronnen & evaluatie',
  'Gesproken documentontsluiting',
  'Anders',
] as const;

const projecten = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    beschrijving: z.string(),                              // Korte beschrijving voor de card (1–2 zinnen)
    onderwerp: z.array(z.enum(onderwerpen)).default([]),   // Een of meer onderwerpen
    instelling: z.string().optional(),                     // Bijv. "Radboud University"
    contact: z.string().optional(),                        // Naam contactpersoon
    contact_email: z.string().email().optional(),
    logo: z.string().optional(),                           // Pad in public/, bijv. "projecten/mijnproject.png"
    website: z.string().url().optional(),
    github: z.string().url().optional(),
    financiering: z.string().optional(),                   // Bijv. "NWO, Horizon Europe"
    fonds_logo: z.string().optional(),                     // Pad in public/, bijv. "projecten/fondsen/clicknl.png"
    looptijd: z.string().optional(),                       // Bijv. "2023–2026"
    partners: z.array(z.object({
      naam: z.string(),
      website: z.string().url().optional(),
      logo: z.string().optional(),                         // Pad in public/, bijv. "projecten/partners/radboud.png"
    })).optional(),
    status: z.enum(['actief', 'afgerond']).default('actief'),
  }),
});

const edities = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    datum: z.date(),
    locatie: z.string().optional(),
    beschrijving: z.string().optional(),
    programma_url: z.string().url().optional(),
    fotos: z.array(z.string()).optional(), // bestandsnamen in public/edities/<slug>/web/
  }),
});

const bestuur = defineCollection({
  type: 'content',
  schema: z.object({
    naam: z.string(),
    rol: z.string(),
    foto: z.string().optional(),
    volgorde: z.number().default(99),
  }),
});

export const collections = { nieuws, projecten, edities, bestuur };
