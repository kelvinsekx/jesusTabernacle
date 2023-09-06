import Image from "next/image";
import Link from 'next/link'
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
            const cond = item.title.toLowerCase() == "give";
            return (
              <li
                key={index}
                className={`${
                  cond ? "bg-tb-black text-white" : ""
                } h-full flex items-center px-1 cursor-pointer`}
              >
                <Link href={item.slug}>{cond ? "GIVE" : item.title.toUpperCase()}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

const navlist = [
 {slug:'/', title:'Home'},
 {slug:'/', title: "watch live service"},
 {slug:'/', title:"Events"},
 {slug:'/', title:"Sermon"},
 {slug:'/', title:"Gallery"},
 {slug:'/contact-us', title:"Contact Us"},
 {slug:'/', title:"Give"}
];
