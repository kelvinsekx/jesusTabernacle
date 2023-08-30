import Image from "next/image";
import { Container } from "../container";

const Posters = () => (
  <div className="bg-[#FDFBF7]">
    <Container pad>
      <div>
        <div className="text-center">
          <div className="text-black text-4.5xl pb-2">
            Stay informed about our programs
          </div>
          <p className="text-tb-grey2 text-base" id="gallery">
            Be the First to Know About Exciting Events and Activities
          </p>
        </div>
        <Posters.Images />
      </div>
    </Container>
  </div>
);

const PImages = () => {
  return (
    <div className="flex flex-wrap justify-between">
      {[1, 2, 3].map((_, index) => (
        <div key={index} className="w-[30%] h-[450px] relative">
          <Image
            src={"/poster.jpg"}
            fill
            alt=""
            className="object-fit object-contain"
          />
        </div>
      ))}
    </div>
  );
};
Posters.Images = PImages;

export default Posters;
