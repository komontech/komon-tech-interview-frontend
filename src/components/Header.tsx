import { DEFAULT_IMG_URL } from "@/helpers/constants";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-start w-full gap-5 border-b pb-5 mb-5">
      <Image src={DEFAULT_IMG_URL} alt="profile" width={150} height={100} />
      <h1 className="h1 block text-left">Social media connections dashboard</h1>
      <div></div>
    </div>
  );
};

export default Header;
