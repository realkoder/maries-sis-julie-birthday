import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function DialogBox() {
  const kam = "🪮🪮🪮🪮🪮🪮🪮🪮🪮🪮";
  const mis = "😽😽😽😽😽😽😽😽😽😽";
  const [emojis, setEmojis] = useState(kam);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojis((cur) => (cur === kam ? mis : kam));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Dialog>
      <DialogTrigger
        className="bg-purple-600 font-bold py-2 px-4 rounded"
        onClick={() => {
          toast("DET ER DIN FØDSELSDAG!", {
            description: "KAM KAM KAM",
            duration: 5000,
          });
        }}
      >
        KLIK MIG
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Fødselsdags digt!!</DialogTitle>
          <DialogDescription>{emojis}</DialogDescription>
          <DialogDescription
            className="text-lg text-left"
            style={{ maxHeight: "300px", overflowY: "auto" }}
          >
            Kære Mari min kvist,
            <br></br>
            her er dit helt eget digt
            <br></br>
            <br></br>
            Så blev det din fødselsdag,
            <br></br>
            hvor er jeg glad som et bølgeslag
            <br></br>
            <br></br>
            Et nyt job ved P3, det er så sejt,
            <br></br>
            hvor musik og popkultur flyder, nat og dag,
            <br></br>
            lige om lidt er vi berejst 🤪
            <br></br>
            <br></br>
            På Roskilde festival, hvor du rocker og ler
            <br></br>
            Popmusikens glæde, du altid ser
            <br></br>
            <br></br>
            Taylor Swift og Seebach, de er dine stjerner,
            <br></br>
            Selvom jeg skæver, og søger andre fjerner.
            <br></br>
            <br></br>
            Din passion for SOME, det gør dig så klog,
            <br></br>
            Din lysende skærm, en vejviser og en bog.
            <br></br>
            <br></br>
            Min kærlighed til dig, kan ikke beskrives,
            <br></br>
            Selvom vi nogle gange har musiksmag som mistrives.
            <br></br>
            <br></br>
            Du er min kam, min mis og giver mig ej kuldegys,
            <br></br>
            På din fødselsdag sender jeg dig al verdens varme og lys.
            <br></br>
            <br></br>
            Så tillykke min mis, på denne særlige dag.
            <br></br>
            Du er jo bare en super-stjerne
            <br></br>
            må vores dage ende langt ude i det fjerne
            <br></br>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default DialogBox;
