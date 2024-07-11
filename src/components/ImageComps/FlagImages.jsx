import Image from "next/image";
import { toast } from "sonner";

const FlagImages = ({ flagUrl }) => {
  return (
    <>
      <Image
        src={flagUrl}
        alt="Flag"
        width={50}
        height={50}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("HIPHIP HURRA! 🎉")}
      />
      <Image
        src={flagUrl}
        alt="Flag"
        width={50}
        height={50}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("HIPHIP HURRA! 🎉")}
      />
      <Image
        src={flagUrl}
        alt="Flag"
        width={50}
        height={50}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("HIPHIP HURRA! 🎉")}
      />
      <Image
        src={flagUrl}
        alt="Flag"
        width={50}
        height={50}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("HIPHIP HURRA! 🎉")}
      />
      <Image
        src={flagUrl}
        alt="Flag"
        width={50}
        height={50}
        className="m-4 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("HIPHIP HURRA! 🎉")}
      />
    </>
  );
};

export default FlagImages;
