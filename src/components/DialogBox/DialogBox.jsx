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
import Image from "next/image";

function DialogBox() {
  const kam = "🚿🚿🚿🚿🚿🚿🚿🚿🚿🚿";
  const mis = "🚾🚾🚾🚾🚾🚾🚾🚾🚾🚾";
  const [emojis, setEmojis] = useState(kam);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojis((cur) => (cur === kam ? mis : kam));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Dialog>
      <DialogTrigger className="bg-purple-600 font-bold py-2 px-4 rounded">
        GAVEKORT
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className={"flex flex-col items-center"}>
          <DialogTitle className="text-2xl">Fødselsdags gavekort</DialogTitle>
          <DialogDescription>{emojis}</DialogDescription>
          <DialogDescription
            className="text-lg text-center flex flex-col items-center"
            style={{ maxHeight: "300px", overflowY: "auto" }}
          >
            <br></br>
            Jeg har desværre været for langsom til at bestille, men her er der et digitalt gavebevis på din gave.
            <br></br>
            <br></br>
            Ophænget er på vej med posten til dig, men indtil da kan du nyde denne hjemmeside.
            <br></br>
            <br></br>
            <Image
              src={
                "https://assets.ellosgroup.com/i/ellos/b?$jg$&$jm$&$jp$&$jd$&n=jot_1523022-02_Fm&mw=776&fmt=webp"
              }
              alt="Badeophæng i dontknow"
              width={200}
              height={100}
              className="m-4 rounded-lg shadow-lg cursor-pointer"
              onClick={() => toast.info("HIPHIP HURRA! 🎉")}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default DialogBox;
