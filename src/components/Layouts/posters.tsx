import Image from "next/image";
import { Container } from "../container";
import { Header } from "../Header/header";
import UploadPosters from "../uploadPosters"
import cloudinary from "./../../lib/cloudinary"

import { Carousel as AliceCarousel } from "./banner";
import { Description } from "../Description";

const getPosters = async ()=> {
  let results = await cloudinary.v2.search
    .expression(`folder:jesusTabernacle/*`)
    .max_results(3)
    .execute()

  let reducedResults: {src:string}[] = []
  let i = 0
  for (let result of results.resources) {
    reducedResults.push({
      src: result.secure_url
    })
    i++
  }

  return {
      images: reducedResults
  }
}
const Posters = async () => {
  const posters = await getPosters();

 return  <div className="bg-[#FDFBF7]">
 <Container pad>
   <div>
     <div className="text-center pb-4">
       <Header>
         Stay informed about our programs
       </Header>
       <Description>
         Be the First to Know About Exciting Events and Activities
       </Description>
     </div>
     <Posters.Images posters={posters.images} />
   </div>
   <UploadPosters />
 </Container>
</div>
}

const PImages = ({posters}: {posters: {src: string}[]}) => {
  return (
    <div>
      {posters.length < 1 ? (
        <p className="text-center text-2xl">No recent poster...</p>
      ) : (
        <>
          <DeskTop posters={posters} />
          <Mobile posters={posters} />
        </>
      )}
    </div>
  );
};
Posters.Images = PImages;

const DeskTop = ({posters}: {posters: {src: string}[]})=><div className="hidden md:flex flex-wrap justify-between">
{posters.map((poster, index) => (
  <div key={index} className="w-[30%] h-[450px] relative">
    <Image
      src={poster.src}
      fill
      alt=""
      className="object-fit object-contain"
    />
  </div>
))}
</div>

const Mobile = ({posters}: {posters: {src: string}[]})=> {
  return <div className="_34sdf max-w-[100rem] md:hidden pt-4">
      <AliceCarousel
        items={posters.map((poster, index) => (
          <Card src={poster.src} key={index} />
        ))}
      />
    </div>
}

const Card = ({src}: {src: string})=> <div className='relative h-96 w-full'>
   <Image src={src} alt='' fill className='object-fit object-center' />
</div>


export default Posters;
