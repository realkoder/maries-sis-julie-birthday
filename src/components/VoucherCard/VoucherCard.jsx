import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

export function VoucherCard({ setShowCard }) {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>🐬🐬🐬🐬🐬🐬🐬🐬🐬🐬</CardTitle>
        <CardTitle>TILGODEBEVIS</CardTitle>
        <CardDescription>FISKEBUFFET</CardDescription>
      </CardHeader>
      <CardContent>
        Dit tilgodebevis til fiskebuffet på øen!
      </CardContent>
      <CardTitle className="mb-4">🐋🐋🐋🐋🐋🐋🐋🐋🐋🐋🐋🐋</CardTitle>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            setShowCard(true);
            toast("ARRGHHHH", {
              description:
                "HVAD MENER DU ?! Det kan ikk cancelssss - åhhh fødselsdag",
              duration: 5000,
            });
          }}
        >
          Cancel
        </Button>
        <Button onClick={() => setShowCard(false)}>GET VIDEO BACK!</Button>
      </CardFooter>
    </Card>
  );
}
