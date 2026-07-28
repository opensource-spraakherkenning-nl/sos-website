# SOS Website — Claude Code projectcontext

Website van **Stichting Open Spraaktechnologie** (SOS), gebouwd met Astro 4.x en gehost op GitHub Pages via het domein `openspraaktechnologie.org`.

GitHub repo: `opensource-spraakherkenning-nl/sos-website`

## Technische stack

- **Framework**: Astro 4.x met content collections
- **Hosting**: GitHub Pages, custom domain `openspraaktechnologie.org`
- **Deploy**: GitHub Actions (`.github/workflows/deploy.yml`) — push naar `main` triggert automatisch een build
- **Base path**: Wordt automatisch bepaald door `configure-pages@v4` in de workflow. Op productie is dit `/`. Gebruik altijd `${base}` uit `src/lib/base.ts` voor interne links en afbeeldingen.
- **Analytics**: GoatCounter (`openspraaktechnologie.goatcounter.com`)
- **RSS**: `/rss.xml` via `@astrojs/rss`

## Contentstructuur

Alle content staat in `src/content/` als Markdown bestanden:

| Collectie | Map | Doel |
|-----------|-----|------|
| `nieuws` | `src/content/nieuws/` | Nieuwsberichten, kort en krachtig, in het Nederlands |
| `projecten` | `src/content/projecten/` | Lopende en afgeronde projecten |
| `edities` | `src/content/edities/` | Speech Tech Day edities (2023–2027) |
| `agenda` | `src/content/agenda/` | Jaaragenda met SOS-evenementen en externe events |
| `bestuur` | `src/content/bestuur/` | Bestuursleden met foto en functie |

Schema's staan in `src/content/config.ts`.

## Werkwijze nieuwsberichten

- Bestand: `src/content/nieuws/<slug>.md`
- Frontmatter: `title`, `date` (YYYY-MM-DD), `description`, `auteur`, `image` (optioneel), `linkedin_tekst` (optioneel)
- Toon: toegankelijk maar inhoudelijk, journalistiek, niet te formeel
- Taal: Nederlands, tenzij de inhoud expliciet in het Engels moet (bijv. workshopabstracts)
- Inline afbeeldingen: pad vanuit `/public/`, bijv. `/nieuws/foto.jpg`
- Thumbnails: pad relatief aan `public/`, bijv. `nieuws/foto.jpg` (zonder leading slash)

## Publiceren

Alle wijzigingen worden direct naar `main` gepusht — er is geen aparte develop-branch. De GitHub Actions workflow bouwt en deployt automatisch.

```bash
git add <bestanden>
git commit -m "Beschrijving"
git push
```

## Wekelijkse nieuwsscan

Er draait een scheduled Claude agent (`spraaktech-nieuws-scout`) die elke maandag om 08:00 relevante spraaktechnologienieuws opspoort. De taak staat in:
`~/.claude/scheduled-tasks/spraaktech-nieuws-scout/SKILL.md`

De agent zoekt naar nieuws over Nederlandse spraaktechnologie en presenteert suggesties voor nieuwsberichten op de website.

## Afbeeldingen

- Bestuursfotos: `public/bestuur/`
- Nieuwsafbeeldingen: `public/nieuws/`
- Projectlogo's: `public/projecten/partners/` en `public/projecten/fondsen/`
- Algemeen: `public/`

## Agenda

Drie typen SOS-evenementen per jaar:
1. **Speech Tech Day** (`type: speech-tech-day`) — breed publiek, linkt naar `/edities/`
2. **Workshop** (`type: workshop`) — wetenschappelijk
3. **Summer/Winter School** (`type: school`) — educatief

Speech Tech Day agenda-items gebruiken `url_intern: edities/speechtechdag-YYYY` om naar de edities-pagina te linken.
