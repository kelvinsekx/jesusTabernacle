import Image from "next/image";
import { Container } from "@/components/container";

export const Navigation = () => {
  return (
    <Container>
      <div className="flex justify-between bg-white text-tb-black text-base items-center">
        <div className="w-20 h-20 relative">
          <Image src={"/rccg_logo.png"} fill alt="The Redeemed Church Logo" />
        </div>
        <ul className="flex justify-between items-center w-2/3 gap-2 h-20">
          {navlist.map((item, index) => {
            const cond = item.toLowerCase() == "give";
            return (
              <li
                key={index}
                className={`${
                  cond ? "bg-tb-black text-white" : ""
                } h-full flex items-center px-1 cursor-pointer`}
              >
                {cond ? "GIVE" : item.toUpperCase()}
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

const navlist = [
  "Home",
  "watch live service",
  "Events",
  "Sermon",
  "Gallery",
  "Contact Us",
  "Give",
];
