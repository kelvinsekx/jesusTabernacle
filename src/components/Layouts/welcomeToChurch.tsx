import Image from "next/image";
import { Container } from "../container";
import { Header } from "../Header/header";

const WTC = () => {
  return (
    <Container pad>
      <div className="flex justify-between">
        <WTC.ImgGrid />
        <WTC.Content />
      </div>
    </Container>
  );
};

const ImageGrid = () => (
  <div className="flex w-2/4 h-[22rem] lg:h-[30rem] gap-4 max-md:hidden">
    <div className="w-1/2 relative h-full">
      <Image
        fill
        alt=""
        src={"/welcome1.jpg"}
        className="object-fit object-bottom rounded"
      />
    </div>
    <div className="h-full w-1/2 gap-4 flex flex-col">
      <div className="w-full relative h-1/2">
        <Image
          fill
          alt=""
          src={"/welcome2.jpg"}
          className="object-fit rounded"
        />
      </div>
      <div className="w-full relative h-1/2">
        <Image
          fill
          alt=""
          src={"/welcome3.jpg"}
          className="object-fit rounded"
        />
      </div>
    </div>
  </div>
);
WTC.ImgGrid = ImageGrid;

const Content = () => (
  <section className="w-full md:w-2/5 flex flex-col gap-2">
    <Header>Welcome to church</Header>
    <p>
      {`This is the Redeemed Christian Church of God, Jesus Tabernacle, Durham. We
know God will meet with you at the point of your needs, we hope you have
come to him with an open heart and faith because He will give you a
testimony in Jesus name, Amen. Enjoy the service.`}
    </p>
  </section>
);
WTC.Content = Content;

export default WTC;
