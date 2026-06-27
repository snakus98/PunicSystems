# PunicSite 

Reproduction de la page d'accueil   (cyber security) avec **Next.js 15** (App Router), **TypeScript** et **Tailwind CSS v4**.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx        # layout racine + métadonnées
  page.tsx          # assemble toutes les sections
  globals.css       # Tailwind v4 + thème de couleurs (navy / purple / teal)
components/
  TopBar.tsx            # barre d'annonce (24/7 incident, téléphone, langue)
  Header.tsx            # navigation principale (responsive)
  Hero.tsx              # "Cyber Security. Where it Matters."
  AccreditationStrip.tsx# bandeau des logos d'accréditation
  EssentialIndustries.tsx # 4 cartes de services
  CustomerStories.tsx   # carrousel de témoignages clients
  MicrosoftPartner.tsx  # partenariat Microsoft
  Awards.tsx            # récompenses
  Accreditations.tsx    # bannière des certifications NCSC
  Industries.tsx        # 6 industries
  LatestInsights.tsx    # 3 articles / événements
  Careers.tsx           # bloc recrutement
  SpeakToTeam.tsx       # appel à l'action contact
  Footer.tsx            # pied de page
  FeedbackTab.tsx       # onglet "Feedback" latéral
```

## Notes

- Les images (data center, photos d'équipe, logos officiels) sont remplacées par
  des dégradés/placeholders. Déposez les visuels dans `public/` et remplacez les
  blocs concernés par `next/image` pour un rendu fidèle.
- Palette définie dans `app/globals.css` via `@theme` :
  `navy`, `purple`, `teal`, `skyblue`.
