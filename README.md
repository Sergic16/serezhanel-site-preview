# Serezha NeL — personal platform

Private source repository for the `serezhanel.ru` website.

## Current state

This repository begins from a read-only recovery of the live static page and includes the first local `scroll-craft` conversion pass:

- primary hero CTA points to the contact block;
- project browsing is the secondary route;
- AI section is framed as evidence and practical verification rather than as a failure headline;
- persistent scroll trace shows the visitor's position through the three worlds;
- portfolio now contains three cards and a documented pattern for adding future projects;
- added a dedicated education/credentials section with a safe placeholder for the user's certificate; no qualification details are invented;
- added a practical-project card for the site itself and a direct route back to contact;

## Safety

The live domain was not changed by creating this repository. Deployments require a separate review and explicit confirmation.

## Local preview

```bash
python3 -m http.server 4500
```

Then open `http://127.0.0.1:4500`.
