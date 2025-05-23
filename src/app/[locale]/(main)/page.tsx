import {
  Booking,
  BookingBlock,
  CommentsSection,
  HomeHeader,
  NewProjects,
  OfferBlock,
  Partners,
  Pricing,
  Showcase,
  SkillsPart,
  StartProject,
  SuccesStories
} from "@/components";
import Collaboration from "@/components/Callobaration";

export default function Home() {
  return (
    <div>
      <main>
        
          <OfferBlock  />
          <HomeHeader />
          <div className="container mx-auto px-4">
          <Showcase className="mt-[110px]" />
          <BookingBlock className="mt-[110px]" />
          <CommentsSection className="mt-[110px]" />
          <SkillsPart className="mt-[110px]" />
          <SuccesStories className="mt-[110px]" />
          <NewProjects />
        </div>
        <Collaboration  />
        <div className="container mx-auto px-4">
         <StartProject/>
          <Partners/>
          <Pricing/>
        </div>
        <Booking/>
      </main>
    </div>
  );
}
