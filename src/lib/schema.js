import { BUSINESS } from "@/lib/business";

/**
 * JSON-LD builders. Webhub4U is modelled as a Service-Area Business (D3 §1):
 * ProfessionalService with areaServed = the GTA / a city, and locality-only
 * address (no street address — the SAB pattern GBP uses).
 */
const address = () => ({
  "@type": "PostalAddress",
  addressLocality: BUSINESS.city,
  addressRegion: BUSINESS.region,
  addressCountry: BUSINESS.country,
});

const provider = () => ({
  "@type": "ProfessionalService",
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  url: BUSINESS.url,
  email: BUSINESS.email,
  ...(BUSINESS.phone ? { telephone: BUSINESS.phone } : {}),
  address: address(),
});

export function localBusinessLd({ areaServed } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    email: BUSINESS.email,
    ...(BUSINESS.phone ? { telephone: BUSINESS.phone } : {}),
    address: address(),
    areaServed: areaServed || BUSINESS.areaServed,
    priceRange: "$$",
  };
}

export function serviceLd(service, cityName) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: cityName ? `${service.name} in ${cityName}` : service.name,
    description: service.short,
    areaServed: cityName || BUSINESS.areaServed,
    provider: provider(),
  };
}

export function faqLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${BUSINESS.url}${it.path}`,
    })),
  };
}
