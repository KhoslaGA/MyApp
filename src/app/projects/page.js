import ProjectsMain from "@/components/layout/main/ProjectsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "Projects | Webhub4u- Technology of tommorow",
  description: "Projects | Webhub4u- Technology of tommorow",
};
export default function Projects() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ProjectsMain />
    </PageWrapper>
  );
}
