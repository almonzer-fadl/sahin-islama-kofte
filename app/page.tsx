"use client";

import type { ReactNode } from "react";
import Image from "next/image";

const business = {
  name: "Şahin Islama Köfte",
  category: "Köfte Lokantası",
  slogan: "Sapanca'nın Efsanesi",
  rating: "4,5",
  ratingNum: 4.5,
  reviewCount: 1411,
  reviewCountDisplay: "1.411",
  priceRange: "₺400–600 / kişi",
  phoneIntl: "+905336303310",
  phoneDisplay: "0533 630 33 10",
  address:
    "Şehit Cevdet Koç Caddesi, Hasanpaşa Mahallesi Esen Sokak No:2, 54600 Sapanca/Sakarya",
  plusCode: "M6RH+7V Sapanca, Sakarya",
  hours: "Her gün 11:00 – 22:00",
  whatsapp:
    "https://wa.me/905336303310?text=" +
    encodeURIComponent("Merhaba, sipariş vermek istiyorum"),
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Şahin Islama Köfte, Şehit Cevdet Koç Caddesi, Hasanpaşa Mahallesi Esen Sokak No:2, 54600 Sapanca/Sakarya"
    ),
};

const IMG = {
  hero: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=1920&q=80",
  grilled:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
  restaurant:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  salad:
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
  baklava:
    "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=80",
  cake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  image: IMG.hero,
  telephone: business.phoneIntl,
  servesCuisine: "Türk",
  priceRange: "₺400–₺600",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hasanpaşa Mahallesi Esen Sokak No:2",
    addressLocality: "Sapanca",
    addressRegion: "Sakarya",
    postalCode: "54600",
    addressCountry: "TR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.5,
    reviewCount: 1411,
    bestRating: 5,
  },
  openingHours: "Mo-Su 11:00-22:00",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Nav />
      <main>
        <Hero />
        <StatsBand />
        <Menu />
        <Story />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function StarIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function PinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function ClockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function MapIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}

function UtensilsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  );
}

function CarIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 012 2v4h-2m-4 0a2 2 0 11-4 0 2 2 0 014 0zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function BagIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M6 7h12l1 14H5L6 7z" />
      <path d="M9 10V6a3 3 0 016 0v4" />
    </svg>
  );
}

function Nav() {
  const links = [
    { href: "#menu", label: "Menü" },
    { href: "#hikayemiz", label: "Hikayemiz" },
    { href: "#yorumlar", label: "Yorumlar" },
    { href: "#iletisim", label: "İletişim" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brown-950/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold uppercase tracking-wide text-brown-950">
            Şahin
          </span>
          <span className="font-display text-[11px] font-medium uppercase tracking-[0.3em] text-brick-600">
            Islama Köfte
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-brown-950/70 transition-colors hover:text-brick-600"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={business.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#1fb958]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Sipariş Ver</span>
          <span className="sm:hidden">Sipariş</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden bg-brown-950"
    >
      <div className="absolute inset-0">
        <Image
          src={IMG.hero}
          alt="Şahin Islama Köfte'de közde pişen ıslama köfte"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-950/80 via-brown-950/55 to-brown-950/90" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-36 text-center">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-cream/25 bg-brown-950/50 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-cream/90 backdrop-blur">
          <UtensilsIcon className="h-4 w-4 text-gold-warm" />
          {business.category} · Sapanca
        </div>

        <h1
          className="animate-fade-up mt-8 font-display text-6xl font-bold uppercase leading-[0.95] tracking-tight text-cream sm:text-8xl lg:text-9xl"
          style={{ animationDelay: "120ms" }}
        >
          Sapanca&apos;nın
          <br />
          <span className="text-brick-300">Efsanesi</span>
        </h1>

        <p
          className="animate-fade-up mt-6 font-display text-xl font-medium uppercase tracking-[0.35em] text-cream/90 sm:text-2xl"
          style={{ animationDelay: "220ms" }}
        >
          Şahin Islama Köfte
        </p>

        <p
          className="animate-fade-up mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/75"
          style={{ animationDelay: "320ms" }}
        >
          Tereyağlı ekmeği, taze domatesi ve közde pişen köftesiyle yıllardır
          Sapanca&apos;nın en sevilen lezzet durağı.
        </p>

        <div
          className="animate-fade-up mx-auto mt-10 inline-flex items-center gap-6 rounded-2xl border-2 border-brick-600/60 bg-brown-950/70 px-8 py-5 backdrop-blur"
          style={{ animationDelay: "420ms" }}
        >
          <div className="text-left">
            <div className="flex text-gold-warm">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${i === 4 ? "opacity-50" : ""}`}
                />
              ))}
            </div>
            <p className="mt-1.5 text-sm font-bold text-cream">4,5 / 5 Puan</p>
          </div>
          <div className="h-12 w-px bg-cream/20" />
          <div className="text-left">
            <p className="font-display text-4xl font-bold leading-none text-cream sm:text-5xl">
              {business.reviewCountDisplay}
            </p>
            <p className="mt-1.5 text-sm font-semibold text-cream/70">
              ★ Google Yorumu
            </p>
          </div>
        </div>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "520ms" }}
        >
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#25D366]/30 transition-all hover:bg-[#1fb958]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp&apos;tan Sipariş Ver
          </a>
          <a
            href="#menu"
            className="rounded-full border-2 border-cream/40 bg-brown-950/30 px-8 py-3.5 text-sm font-bold text-cream backdrop-blur transition-all hover:border-cream/70 hover:bg-brown-950/50"
          >
            Menüyü Gör
          </a>
        </div>
      </div>

      <a
        href="#menu"
        aria-label="Aşağı kaydır"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-cream/50 transition-colors hover:text-cream"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}

function StatsBand() {
  const stats = [
    { value: "4,5", label: "Google Puanı" },
    { value: "1.411", label: "Google Yorumu" },
    { value: "₺400–600", label: "Kişi Başı" },
    { value: "11:00–22:00", label: "Her Gün Açık" },
  ];

  return (
    <section className="border-b-4 border-gold-warm bg-brick-600">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-10 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-bold text-cream sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-cream/70">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" className="scroll-mt-20 bg-cream py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brick-600">
            Menü
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-brown-950 sm:text-5xl">
            Ustanın Klasikleri
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-brown-950/60">
            Her gün taze hazırlanan, Sapanca&apos;yı Sapanca yapan lezzetler.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="chalkboard rounded-3xl border-8 border-[#6b4a33] p-8 shadow-2xl sm:p-12">
            <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.4em] text-cream/50">
              — Şahin Islama Köfte —
            </p>
            <ol className="mt-4 divide-y divide-cream/10">
              {menuItems.map((item, i) => (
                <li key={item.name} className="flex items-baseline gap-4 py-5">
                  <span className="font-display text-sm font-semibold text-gold-warm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-cream sm:text-xl">
                      {item.name}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-cream/60">
                      {item.desc}
                    </p>
                  </div>
                  <span className="mx-2 flex-1 border-b border-dotted border-cream/25" />
                  <span className="whitespace-nowrap font-display text-xl font-bold text-gold-warm">
                    {item.price} ₺
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-brick-200 bg-white px-5 py-2.5 text-sm font-semibold text-brick-700 shadow-sm">
              <UtensilsIcon className="h-4 w-4" />
              Yemek Salonu
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brick-200 bg-white px-5 py-2.5 text-sm font-semibold text-brick-700 shadow-sm">
              <CarIcon className="h-4 w-4" />
              Arabaya Servis
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brick-200 bg-white px-5 py-2.5 text-sm font-semibold text-brick-700 shadow-sm">
              <BagIcon className="h-4 w-4" />
              Temassız Teslimat
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brick-200 bg-white px-5 py-2.5 text-sm font-semibold text-brown-950 shadow-sm">
              <ClockIcon className="h-4 w-4 text-brick-600" />
              {business.hours}
            </span>
          </div>
          <p className="mt-6 text-center text-sm text-brown-950/50">
            Fiyatlar temsilidir; güncel menü için WhatsApp&apos;tan bize ulaşın.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="hikayemiz" className="scroll-mt-20 bg-cream-dark py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brick-600">
              Hikayemiz
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight text-brown-950 sm:text-5xl">
              Ustanın Elinden,
              <br />
              <span className="text-brick-600">Yılların Lezzeti</span>
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-brown-950/75">
              <p>
                Sapanca&apos;da ıslama köfte denince akla ilk gelen adres: Şahin
                Islama Köfte. Hasanpaşa&apos;daki mütevazı dükkanımızda
                tereyağlı ekmek, közlenmiş domates sosu ve özenle yoğrulan
                köfteler her gün aynı emekle hazırlanır.
              </p>
              <p>
                Şahin Usta ve eşinin işlettiği bu aile işletmesinde
                misafirlerimizi müşteri gibi değil, evimizin konuğu gibi
                ağırlıyoruz. Çocuk oyun alanımızla ailelerin vazgeçilmez
                buluşma noktasıyız.
              </p>
              <p>
                Kuzu pirzoladan kaymaklı revaniye kadar her şey taze ve günlük.
                Lezzetimizi binlerce Google yorumuyla taçlandıran
                misafirlerimize teşekkür ederiz.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-brick-200 bg-white px-6 py-4 shadow-sm">
              <div className="flex text-gold-warm">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${i === 4 ? "opacity-50" : ""}`}
                  />
                ))}
              </div>
              <p className="text-sm font-bold text-brown-950">
                4,5 · {business.reviewCountDisplay} Google yorumu
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={IMG.grilled}
                  alt="Közde pişen köfteler"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={IMG.salad}
                  alt="Taze piyaz"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={IMG.baklava}
                  alt="Şerbetli tatlılar"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="yorumlar" className="scroll-mt-20 bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brick-600">
            Yorumlar
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-brown-950 sm:text-5xl">
            Konuklarımız Ne Diyor?
          </h2>
          <div className="mx-auto mt-8 inline-flex items-center gap-5 rounded-2xl border border-brick-100 bg-cream px-8 py-5">
            <p className="font-display text-5xl font-bold text-brown-950">
              {business.rating}
            </p>
            <div className="text-left">
              <div className="flex text-gold-warm">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${i === 4 ? "opacity-50" : ""}`}
                  />
                ))}
              </div>
              <p className="mt-1 text-sm font-semibold text-brown-950/60">
                {business.reviewCountDisplay} Google yorumuna göre
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brown-950/50">
            Konuklar neyi seviyor
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {topics.map((t) => (
              <span
                key={t}
                className="rounded-full bg-cream px-4 py-1.5 text-sm font-semibold text-brick-700 ring-1 ring-brick-100"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.author} delay={(i % 3) * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-cream-dark bg-cream/60 p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex text-gold-warm">
                    {[...Array(5)].map((_, s) => (
                      <StarIcon key={s} className="h-4 w-4" />
                    ))}
                  </div>
                  <span className="rounded-full border border-brick-100 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brick-700">
                    Google Yorumu
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm italic leading-relaxed text-brown-950/80">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-cream-dark pt-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brick-600 font-display text-sm font-bold text-cream">
                    {r.author
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-brown-950">
                      {r.author}
                    </p>
                    <p className="text-xs text-brown-950/50">{r.when}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="iletisim" className="scroll-mt-20 bg-cream-dark py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brick-600">
            İletişim
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-brown-950 sm:text-5xl">
            Bize Ulaşın
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-8">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brick-600 text-cream">
                <PinIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brown-950">
                  Adres
                </h3>
                <p className="mt-1.5 leading-relaxed text-brown-950/70">
                  {business.address}
                </p>
                <p className="mt-1 text-xs font-semibold text-brick-600">
                  Plus Code: {business.plusCode}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brick-600 text-cream">
                <PhoneIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brown-950">
                  Telefon
                </h3>
                <a
                  href={`tel:${business.phoneIntl}`}
                  className="mt-1.5 block font-semibold text-brown-950/70 transition-colors hover:text-brick-600"
                >
                  {business.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brick-600 text-cream">
                <ClockIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-brown-950">
                  Çalışma Saatleri
                </h3>
                <p className="mt-1.5 leading-relaxed text-brown-950/70">
                  {business.hours}
                </p>
                <p className="mt-1 text-xs font-semibold text-brick-600">
                  Yemek salonu · Arabaya servis · Temassız teslimat
                </p>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-4">
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#25D366]/30 transition-all hover:bg-[#1fb958]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp&apos;tan Yazın
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2.5 rounded-full border-2 border-brick-600 px-8 py-4 text-sm font-bold text-brick-700 transition-all hover:bg-brick-600 hover:text-cream"
              >
                <MapIcon className="h-5 w-5" />
                Yol Tarifi Al
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative h-full min-h-80 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={IMG.restaurant}
                alt="Şahin Islama Köfte restoranı"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-2xl font-bold uppercase text-cream">
                  {business.name}
                </p>
                <p className="mt-1 text-sm text-cream/80">
                  {business.address}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { href: "#menu", label: "Menü" },
    { href: "#hikayemiz", label: "Hikayemiz" },
    { href: "#yorumlar", label: "Yorumlar" },
    { href: "#iletisim", label: "İletişim" },
  ];

  return (
    <footer className="bg-brown-950 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-bold uppercase tracking-wide text-cream">
              Şahin Islama Köfte
            </p>
            <p className="mt-2 font-display text-xs font-medium uppercase tracking-[0.3em] text-gold-warm">
              {business.slogan}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Hasanpaşa&apos;da, ustanın elinden çıkan efsanevi ıslama
              köftenin adresi.
            </p>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-cream/50">
              Keşfet
            </p>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream/70 transition-colors hover:text-gold-warm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-cream/50">
              İletişim
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
              <li>{business.address}</li>
              <li>
                <a
                  href={`tel:${business.phoneIntl}`}
                  className="transition-colors hover:text-gold-warm"
                >
                  {business.phoneDisplay}
                </a>
              </li>
              <li>{business.hours}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-cream/10 pt-8 text-center sm:flex-row sm:justify-between">
          <p className="text-sm text-cream/50">
            &copy; {new Date().getFullYear()} Şahin Islama Köfte. Tüm hakları
            saklıdır.
          </p>
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-cream/70 transition-colors hover:text-[#25D366]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp&apos;tan Sipariş Ver
          </a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={business.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`fade-in ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

const menuItems = [
  {
    name: "Islama Köfte (Porsiyon)",
    desc: "Tereyağlı ekmek, közlenmiş domates sosu ve köz biber eşliğinde efsanevi köftemiz.",
    price: "480",
  },
  {
    name: "Islama Köfte (Dürüm)",
    desc: "Yolda olanlar için dürüm halinde, aynı lezzet pratik sunumda.",
    price: "290",
  },
  {
    name: "Kuzu Pirzola",
    desc: "Odun kömüründe pişen, duman aromalı süt kuzusu pirzola.",
    price: "550",
  },
  {
    name: "Piyaz",
    desc: "Hasanpaşa usulü; ince kıyım kuru soğan, sumak ve taze maydanozla.",
    price: "140",
  },
  {
    name: "Patates Tava",
    desc: "Müşterilerimizin favorisi; çıtır çıtır el kesimi patates.",
    price: "90",
  },
  {
    name: "Kabak Tatlısı",
    desc: "Ceviz ve tahinle servis edilen geleneksel kabak tatlısı.",
    price: "160",
  },
  {
    name: "Revani",
    desc: "Şerbeti tam kıvamında, Antep fıstığıyla süslenmiş klasik revani.",
    price: "150",
  },
  {
    name: "Kaymaklı Revani",
    desc: "Sapanca'nın meşhur taze kaymağıyla servis edilen revani.",
    price: "180",
  },
  {
    name: "Ekmek Kadayıfı",
    desc: "Üzeri taze kaymak ve Antep fıstığı ile tamamlanan ekmek kadayıfı.",
    price: "150",
  },
  {
    name: "Ayran",
    desc: "Yemeklerin yanına köpük köpük ev yapımı ayran.",
    price: "45",
  },
];

const topics = [
  "Islama Köfte",
  "Revani",
  "Aile Ortamı",
  "Kabak Tatlısı",
  "Ekmek Kadayıfı",
  "Piyaz",
  "Kuzu Pirzola",
  "Çocuk Oyun Alanı",
  "Kaymaklı Revani",
];

const reviews = [
  {
    author: "Amr Wael Mohamed Helaly",
    rating: 5,
    when: "2 yıl önce",
    text: "Authentic, simple and just what you are looking for. Good food and great staff. The fries (patates) is amazing.",
  },
  {
    author: "Traveller Diver",
    rating: 5,
    when: "1 ay önce",
    text: "Kofte was tasty and juicy. Especially I liked their yoghurt and piyaz. You should definitely try.",
  },
  {
    author: "Amjed Saqallah",
    rating: 5,
    when: "1 yıl önce",
    text: "It's so delicious that there's nothing left on the plates. Its prices are very reasonable and not expensive.",
  },
  {
    author: "Fares Alsharif",
    rating: 5,
    when: "2 ay önce",
    text: "The food was very nice and the service was amazing, especially the staff, they were very nice and recommended nice options.",
  },
  {
    author: "BaDaR Al Alawi",
    rating: 5,
    when: "1 yıl önce",
    text: "Delicious kofte with good price. Near main road. Nice staff.",
  },
  {
    author: "Manahil Al",
    rating: 5,
    when: "3 yıl önce",
    text: "Best kofte not only in Sapanca but in Turkey as a whole. I have been in Sapanca for almost 5 years and nothing competes with their kofte. Şahin and his wife are so friendly and nice people.",
  },
  {
    author: "Hamody Obaidy",
    rating: 5,
    when: "1 yıl önce",
    text: "The food is delicious and fresh.",
  },
  {
    author: "Bulent Kasman",
    rating: 5,
    when: "4 yıl önce",
    text: "The famous ıslama köfte of Sapanca can be best experienced here. It's a small local restaurant that does not serve alcoholic beverages, but the food is well prepared and yummy.",
  },
  {
    author: "Layan",
    rating: 5,
    when: "8 yıl önce",
    text: "Local restaurant, very yummy köfte, nice place, good prices and very kind people! They act like we are their guests, not customers.",
  },
];
