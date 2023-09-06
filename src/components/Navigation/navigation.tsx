import Image from "next/image";
import Link from 'next/link'
import { Container } from "@/components/container";
import { GiveDialog } from "../GiveDialog/dialog";

export const Navigation = () => {
  return (
    <Container>
      <div className="flex justify-between bg-white text-tb-black text-base items-center">
        <div className="w-20 h-20 relative">
          <Image src={"/rccg_logo.png"} fill alt="The Redeemed Church Logo" />
        </div>
        <ul className="flex justify-between items-center w-2/3 gap-2 h-20">
          {navlist.map((item, index) => {
            return (
              <li
                key={index}
                className={`h-full flex items-center px-2 cursor-pointer`}
              >
                <Link href={item.slug}>{item.title.toUpperCase()}</Link>
              </li>
            );
          })}
          <li className="h-full cursor-pointer px-2">
            <GiveDialog />
          </li>
        </ul>
      </div>
    </Container>
  );
};

const navlist = [
 {slug:'/', title:'Home'},
 {slug:'/live-service', title: "watch live service"},
 {slug:'/', title:"Events"},
 {slug:'/', title:"Sermon"},
 {slug:'/', title:"Gallery"},
 {slug:'/contact-us', title:"Contact Us"}
];
