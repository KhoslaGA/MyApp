import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getAllServices from "@/libs/getAllServices";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Services Details | Bastun- Business Consulting Next Js Template",
  description:
    "Services Details | Bastun- Business Consulting Next Js Template",
};

const services = getAllServices();

export default function ServicesDetails({ params }) {
  const { id } = params;
  console.log("Route Params:", params); // Debugging
  const isExistService = services?.find(({ id: id1 }) => id1 === parseInt(id)); // Ensure `id` comparison matches data type
  if (!isExistService) {
    console.error(`Service with ID ${id} not found`); // Additional debugging
    notFound();
  }
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <ServiceDetailsMain />
    </PageWrapper>
  );
}

export async function generateStaticParams() {
  const params = services?.map(({ id }) => ({ id: id.toString() }));
  console.log("Generated Static Params:", params); // Debugging
  return params;
}
