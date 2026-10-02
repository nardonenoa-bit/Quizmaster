# Coach Trail · Noa

Dashboard de coaching trail. Un seul fichier : `index.html`. Aucune installation.

## Lancer

Ouvrir `index.html` dans un navigateur. Ou servir le dossier :

```
npx http-server coach-trail
```

## Onglets

- **Tableau de bord** : comptes à rebours UTBV et Sainté-Lyon, volume km et D+ planifié vs réalisé, mot du coach, séances de la semaine, aujourd'hui et demain, activités Strava, chaussures.
- **Plan** : S35 à S48, séance par jour avec type, km, D+, FC, allure, note. Mode édition : km et D+ prévus, km et D+ réels, note, case fait, glisser-déposer (flèches sur mobile).
- **Calendrier** : août à novembre, couleur par type, totaux hebdo planifié / réalisé, courses incluses.
- **Parcours** : profils UTBV, Drutel, Trail de la Mine, Monteynard. Tronçons, D+ cumulé, stratégie UTBV avec temps cible réglable. Import GPX.
- **Zones & allures** : zones FC, allures, zones Strava, prévisions, calculateur km-effort, Monteynard, nutrition.
- **Coach IA** : chat Claude avec toutes les données athlète dans le prompt système.

## Données

- Snapshot Strava du 2 octobre 2026 embarqué : activités depuis le 24 août, streams des 3 courses, km chaussures.
- Le foot est exclu du volume course à pied. Il apparaît à part.
- Bloc B (S42-S48) : proposition de coach, éditable.
- Profil UTBV schématique tant que le GPX n'est pas importé.

## Coach IA et synchro Strava

Dans l'onglet Coach IA :

1. Clé API Anthropic (obligatoire pour le chat).
2. Token OAuth du serveur MCP Strava `https://mcp.strava.com/mcp` (facultatif).

Avec le token, le coach interroge Strava en direct via le connecteur MCP. Le bouton **Synchro** recharge activités et km chaussures.

Les clés restent dans le `localStorage` du navigateur. Elles partent uniquement vers `api.anthropic.com`. Ne pas publier la page avec une clé enregistrée.

## Persistance

Éditions du plan, GPX importés, synchro et chat : `window.storage` si disponible (artefact Claude), sinon `localStorage`.
