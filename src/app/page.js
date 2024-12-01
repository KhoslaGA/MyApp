import HomeMain from "@/components/layout/main/HomeMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Webhub4u - Take your business to the next level",
  description: "Webhub4u - Technology of tommorow, today",
};
export default function Home() {
  return (
    <PageWrapper headerStyle={3} footerStyle={2}>
      <ThemeController />
      <HomeMain />
    </PageWrapper>
  );
}
