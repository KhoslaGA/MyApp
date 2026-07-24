import LandingPage from "@/components/sections/new/LandingPage";

export const metadata = {
  title: "AI Receptionist for GTA Businesses | Webhub4U",
  description:
    "An AI receptionist that answers every call, texts back missed ones, and books jobs 24/7. Hear it live on your own business.",
  robots: { index: false, follow: false },
};

// Message-matched to search intent (solution-aware). ?v=b for A/B testing.
const COPY = {
  a: {
    eyebrow: "AI Receptionist · Serving the GTA",
    h1: "The AI receptionist that books jobs while you work.",
    sub: "It answers every call in your business name, texts back the ones you miss, and drops booked appointments straight into your calendar — 24/7.",
    ctaPrimary: "Hear it live",
    formHeading: "Hear exactly what your callers would hear.",
  },
  b: {
    eyebrow: "AI Receptionist · Serving the GTA",
    h1: "Never send another caller to voicemail.",
    sub: "Your AI receptionist answers on the first ring, day or night, and books the job — so the lead you paid to earn doesn't call the next guy.",
    ctaPrimary: "Get my free demo",
    formHeading: "Book your live demo.",
  },
};

export default function Page({ searchParams }) {
  const variant = searchParams?.v === "b" ? "b" : "a";
  return <LandingPage copy={COPY[variant]} source={`lp-google-${variant}`} />;
}
