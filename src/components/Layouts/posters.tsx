import Image from "next/image";
import { Container } from "../container";
import UploadPosters from "../uploadPosters"
import cloudinary from "./../../lib/cloudinary"

import { Carousel as AliceCarousel } from "./carousel";

const getPosters = async ()=> {
  let results = await cloudinary.v2.search
    .expression(`folder:jesusTabernacle/*`)
    .sort_by('public_id', 'desc')
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
  const posters =  await getPosters()

 return  <div className="bg-[#FDFBF7]">
 <Container pad>
   <div>
     <div className="text-center pb-4">
       <div className="text-black text-3xl md:text-4.5xl pb-2">
         Stay informed about our programs
       </div>
       <p className="text-tb-grey2 text-base text-center" id="gallery">
         Be the First to Know About Exciting Events and Activities
       </p>
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
      <DeskTop posters={posters}/>
      <Mobile posters={posters}/>
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
