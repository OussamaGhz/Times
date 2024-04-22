import { Card, CardContent } from "@/components/ui/card";

const CardC = () => {
  return (
    <Card className="rounded-[16px] bg-[linear-gradient(90deg,_#70B0FF_0%,_#0072FF_100%)] min-w-[360px] h-[162px] flex-shrink-0 relative">
      <CardContent></CardContent>
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
      <div className="h-[167px] w-[167px] bg-white rounded-full absolute bottom-0 left-0 transform translate-y-[30%] translate-x-[-25%] opacity-10"></div>
        <div className="h-[157px] w-[157px] bg-white rounded-full absolute bottom-0 left-0 transform translate-y-[50%] translate-x-[-25%] opacity-20"></div>
      </div>
    </Card>
  );
};

export default CardC;
