/* eslint-disable @next/next/no-img-element */
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export default function Choose() {
  return (
    <section className="relative">
      <HeroVideoDialog
        className="block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://placehold.co/1583x560"
        thumbnailAlt="Hero Video"
      />
    </section>
  );
}
