import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CiMedicalCase } from "react-icons/ci";

const infos = [
  {
    Icon: <CiMedicalCase />,
    title: "Qualified Doctor",
    description: "Lorem ipsum dolor sit amet ctetur adipiscing",
  },
  {
    Icon: <CiMedicalCase />,
    title: "Emergency Help",
    description: "Lorem ipsum dolor sit amet ctetur adipiscing",
  },
  {
    Icon: <CiMedicalCase />,
    title: "Modern Equment",
    description: "Lorem ipsum dolor sit amet ctetur adipiscing",
  },
  {
    Icon: <CiMedicalCase />,
    title: "Family Medicine",
    description: "Lorem ipsum dolor sit amet ctetur adipiscing",
  },
];

export default function CardInfo() {
  return (
    <div className="flex items-center pt-28 pb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {infos.map((info) => (
          <Card
            key={info.title}
            className="w-[300px] hover:bg-blue-700 transition-all delay-100 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] transform hover:translate-y-2 duration-300 text-mons hover:text-white"
          >
            <CardHeader>
              <div className="h-20 w-20 bg-device-50 hover:bg-white rounded-full flex items-center justify-center">
                <div className="text-5xl text-device-900">{info.Icon}</div>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold">{info.title}</h3>
            </CardContent>
            <CardFooter>
              <p>{info.description}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
