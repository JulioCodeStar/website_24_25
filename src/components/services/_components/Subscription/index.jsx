import { Button } from "@/components/ui/button";
import React from "react";

export default function Subscription() {
  return (
    <section className="relative before:absolute before:content-[''] before:bg-device-950 before:w-full before:h-1/2 before:left-0 before:bottom-0 ">
      <div className="max-w-[1320px] mx-auto px-10">
        <div className="relative py-16 z-[1] before:absolute before:content-[''] before:bg-white before:w-[calc(100%+180px)] before:h-full before:-left-[90px] before:top-0 before:shadow-[0_3px_10px_rgb(0,0,0,0.2)] before:rounded-[20px] before:z-[-1] ">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="space-y-3">
              <h2 className="text-4xl text-mons ">
                <span className="text-blue-700 font-semibold">Subscribe</span>{" "}
                for the exclusive updates!
              </h2>
              <p>Ut eu enim ut deserunt dolore incididunt eu.</p>
            </div>

            <Button className="bg-device-600 hover:bg-device-500 rounded-full p-6">
              Contáctenos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
