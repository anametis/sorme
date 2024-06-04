import Hero from "@/components/Hero";
import TopOffers from "@/components/TopOffers";
import TopBrands from "@/components/TopBrands";
import DailyOffers from "@/components/DailyOffers";
import Review from "@/components/Review";
import MainFeatures from "@/components/MainFeatures";
import ContactSupport from "@/components/ContactSupport";
import ClientProvider from "@/components/ClientProvider";
import SpacialOffer from "@/components/SpacialOffer";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MegaMenu from "@/components/MegaMenu";
import ProductList from "@/components/MegaMenu";

export default function Home() {
  return (
    <>
      <SpacialOffer />
      <Header />
      <MaxWithWrapper>
        <Hero />
        <TopOffers />
        <DailyOffers />
        <TopBrands />
        <Review />
        <MainFeatures />
        <ContactSupport />
      </MaxWithWrapper>
      <Footer />
    </>
  );
}
