# Serezha NeL: personal platform

Source repository for the `serezhanel.ru` redesign.

## Current concept

The site is rebuilt around one promise: Sergey helps turn a complex AI, website, or digital task into a working result.

The visual concept is **Noise to Signal**:

- layered editorial hero with a scroll-driven signal line;
- pinned manifesto that explains the practical, non-guru approach;
- three clear help routes without competing primary CTAs;
- verifiable portfolio links instead of abstract case studies;
- transparent four-step working process;
- education section with a safe placeholder until the real certificate is supplied;
- music as a human proof of authorship, not a competing service;
- one primary conversion route: `Обсудить задачу`.

## Structure

- `index.html`: semantic page structure and copy;
- `assets/site.css`: brand, layout, responsive states and reduced-motion fallback;
- `assets/site.js`: navigation and authored interaction layer;
- `assets/scrollcraft.css` and `assets/scrollcraft.js`: local scroll-craft runtime;
- `BRIEF.md`: creative direction and journey specification.

## Local preview

```bash
python3 -m http.server 4500
```

Open `http://127.0.0.1:4500`.

## Portfolio extension pattern

Each new project should contain:

1. project type;
2. title;
3. verified task and contribution;
4. honest result;
5. visual asset;
6. direct working URL.

Do not invent metrics, clients, qualifications, certificate details, or outcomes.

## Safety and release boundary

The public preview is published separately through GitHub Pages. Updating this branch does not deploy to the production domain. Production deployment requires a backup, a tested rollback path and explicit confirmation.
