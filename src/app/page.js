"use client";

import DialogBox from "@/components/DialogBox/DialogBox";
import DifferentImages from "@/components/ImageComps/DifferentImages";
import FlagImages from "@/components/ImageComps/FlagImages";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

export default function Home() {
  const handHoldFlagUrl =
    "https://fest4all.dk/cdn/shop/products/1050-00010_79304686_26443501-481b-4ab8-a58e-5527cfefa52e.jpg?v=1578583169";
  const classicFlagUrl =
    "https://kija-design.dk/images/foedselsdagsflag-kageflag-dannebrogflag-dansk-flag-ss797416_1-t.webp";

  const [flagUrl, setFlagUrl] = useState(handHoldFlagUrl);
  const [showBadeHat, setShowBadeHat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlagUrl((cur) =>
        cur === handHoldFlagUrl ? classicFlagUrl : handHoldFlagUrl
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="text-center">
      <h1 className="text-3xl my-4">FØDSELSDAG</h1>
      <div className="flex flex-row justify-center m-4">
        <FlagImages flagUrl={flagUrl} />
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col items-center m-4">
          <DifferentImages />
        </div>

        <div className="flex flex-col items-center m-4">
          <Toaster />
          <h1 className="text-lg my-8">TILLYKKE MED DAGEN MARI! 🇩🇰 </h1>
          <DialogBox />
          <p className="font-sans leading-relaxed my-8 text-xl">
            Jamen så blev det jo din fødselsdag! <br></br>
            Tak for dig og for at jeg må være med til at fejre dig. <br></br>
            Her er en lille dum hjemmeside fra{" "}
            <span className="font-bold">MIIIAAAAHHGGG</span> til{" "}
            <span className="font-bold">DIAAAAGGHHH</span>! <br></br>
            Klik lidt rundt og se hvad den kan{" "}
            <span className="italic">10hiii f9zzz....</span>
          </p>
          {!showBadeHat && (
            <Button
              variant="destructive"
              onClick={() => {
                setShowBadeHat(true);
                setTimeout(() => setShowBadeHat(false), 3000);
              }}
            >
              KLIK HER HVIS DU TØR <br></br>
              (showBadeHat)
            </Button>
          )}

          {showBadeHat && (
            <Image
              src="https://wedobetter.dk/cdn/shop/products/5_7a4a7ab2-b9ef-40dd-aae4-a37ca712b862.jpg?v=1666864560"
              alt="Hundemad"
              width={200}
              height={200}
              className="m-2 rounded-lg shadow-lg cursor-pointer"
              onClick={() =>
                toast.info("JEG ER BARE EN SJOV LILLE NISSE - hihiihi!")
              }
            />
          )}
        </div>

        <div className="flex flex-col items-center m-4">
          <DifferentImages />
        </div>
      </div>

      <div className="flex flex-row justify-center m-4">
        <FlagImages flagUrl={flagUrl} />
      </div>
    </main>
  );
}
