# Green Leaf Society — build log

## Approved plan
Hybrid brand + shop. Dark/neon-green, streetwear-premium. Reference: bento panels, big centered
display type, marquees, pill buttons (from user's attached image, darkened).
Checkout = order capture only, no Stripe. Age gate 21+. Guest checkout, no auth.

## Steps
- [x] app_init
- [x] design.md
- [x] 12 images generated → packages/web/public/images/
- [ ] schema + db:push
- [ ] seed content
- [ ] api routes: catalog, orders, content
- [ ] fonts + tokens in styles.css / index.html
- [ ] shell: Nav, Footer, AgeGate, Marquee, Panel, cart context
- [ ] home
- [ ] shop grids + product detail + cart + checkout
- [ ] strains, society, locations, contact
- [ ] lint + build + browser walkthrough
- [ ] deliver

## Decisions
- Fonts: Chillax (display) + Satoshi (body) via Fontshare CDN.
- Product names invented in the Muha/Sherbinskis lane — no real trademarks.
- Cart in localStorage; order POSTed at checkout, returns confirmation code.
- Images: 3 cart shots + 3 disposable shots reused across 12 SKUs (normal for real brands).

## Resume log (page build)
- [x] app.tsx wired: CartProvider, AgeGate, Nav, CartDrawer, Footer, ScrollManager, all routes + 404
- [x] components/page-hero.tsx
- [x] pages/shop.tsx, product.tsx, strains.tsx, strain.tsx, society.tsx, locations.tsx
- [ ] pages/contact.tsx, cart.tsx, checkout.tsx, order-confirmation.tsx
- [ ] lint / typecheck / build
- [ ] browser walkthrough (375 / 768 / desktop)
- [ ] deliver

## Verification — complete
- typecheck: pass (web/mobile/desktop)
- oxlint packages/web: 0 warnings, 0 errors
- build: pass (web 902kb js / 59kb css)
- lint (root): 1 pre-existing template error in untouched packages/mobile/app/_layout.tsx (rule expects components/ErrorBoundary, template ships __ErrorBoundary). Cannot fix — __ file.
- Browser walkthrough (1440 + 375): age gate -> home -> shop/screw-ons -> filters -> product detail -> add to cart -> cart -> checkout -> order placed (GLS-U3UK4A) -> confirmation. 0 console/page errors.
- API smoke: catalog.products/featured/strains, content.locations/testimonials all return data.
