import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card";
  import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative w-full py-16">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 px-4 pb-8">
          <h2 className="text-4xl text-center font-bold text-mons">
            Pongámonos en contacto.
          </h2>
          <p className="text-gray-400 text-center">
            Eu esse et nostrud consequat commodo voluptate qui ipsum cillum
            mollit labore ipsum duis ea.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 py-8">
          <Card
            className="w-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] text-mons"
          >
            <CardHeader>
                <h3 className="text-xl text-mons font-semibold">Quick Contact</h3>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="text-2xl text-white">
                        <FaPhoneAlt />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm text-gray-800">Main Office</h4>
                    <p className="text-sm text-gray-800">+1 (234) 567-8901, +1 (234) 567-8902</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card
            className="w-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] text-mons"
          >
            <CardHeader>
                <h3 className="text-xl text-mons font-semibold">Quick Contact</h3>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="text-2xl text-white">
                        <FaPhoneAlt />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm text-gray-800">Main Office</h4>
                    <p className="text-sm text-gray-800">+1 (234) 567-8901, +1 (234) 567-8902</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="w-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] text-mons"
          >
            <CardHeader>
                <h3 className="text-xl text-mons font-semibold">Quick Contact</h3>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="text-2xl text-white">
                        <FaPhoneAlt />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm text-gray-800">Main Office</h4>
                    <p className="text-sm text-gray-800">+1 (234) 567-8901, +1 (234) 567-8902</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
