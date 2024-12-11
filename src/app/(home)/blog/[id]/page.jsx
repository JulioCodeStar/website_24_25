import { HeroBannerSimpleSection, SimpleBlogSection } from "@/components/blog";
import { Subscription } from "@/components/services";

export default function SimpleBlog() {
  return (
    <>
        <HeroBannerSimpleSection />
        <SimpleBlogSection />
        <Subscription />
    </>
  )
}
