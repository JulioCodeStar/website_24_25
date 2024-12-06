import { Button } from "@/components/ui/button";
import React from "react";

export default function Subscription() {
  return (
    <section className="relative before:absolute before:content-[''] before:bg-device-950 before:w-full before:h-1/2 before:left-0 before:bottom-0">
      <div className="w-full max-w-[1320px] mx-auto">
        <div className="px-4 relative lg:mx-10 py-12 md:py-16 z-[1] bg-white md:bg-transparent before:hidden md:before:block before:absolute before:content-[''] before:bg-white before:w-full lg:before:w-[calc(100%+180px)] before:h-full before:left-0 lg:before:-left-[90px] before:top-0 before:shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:before:rounded-[20px] before:z-[-1]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 px-4 md:px-8 lg:px-10">
            <div className="space-y-3 text-center md:text-left w-full md:w-auto">
              <h2 className="text-3xl lg:text-4xl text-mons">
                <span className="text-blue-700 font-semibold">Subscribe</span>{" "}
                for the exclusive updates!
              </h2>
              <p className="text-gray-600">
                Ut eu enim ut deserunt dolore incididunt eu.
              </p>
            </div>

            <Button
              className="bg-teal-600 hover:bg-teal-500 rounded-full w-full md:w-auto px-8 py-6 text-white font-medium transition-colors"
              size="lg"
            >
              Contáctenos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
