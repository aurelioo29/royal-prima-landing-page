import HomeDepartments from "@/components/home/departments";
import HomeHeroQuickInfo from "@/components/home/hero-quick-info";
import HeroSlider from "@/components/home/hero-slider";
import HomeLatestBlog from "@/components/home/latest-blog";
import HomePartners from "@/components/home/partners";
import HomeTestimonials from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <HomeHeroQuickInfo />

      <HomeDepartments />

      <HomeTestimonials />

      <HomePartners />

      <HomeLatestBlog />
    </>
  );
}
