import * as React from "react";
import { IBTCMarquee } from "./ibtcMarquee";
import { Container } from "../container";
import { Header } from "../Header/header";

export function Gallery() {
  return (
    <div className="bg-[#EAF2F6]">
      <Container pad>
        <section className="text-center">
          <Header>Our Gallery</Header>
          <p className="text-tb-grey2 text-base" id="gallery">
            Be the First to Know About Exciting Events and Activities
          </p>
        </section>
      </Container>
      <IBTCMarquee images={sources}></IBTCMarquee>
      <IBTCMarquee images={sources2} reverse></IBTCMarquee>
    </div>
  );
}

const sources = [
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686718456/a_speaker_at_the_ibadan_techies_kff5so",
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686712604/techies_at_a_meetup_in_Nigeria_pnjhwb",
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686713329/happy_techies_at_a_tech_meetup_in_nigeria_guvvww",
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686713737/two_attendees_at_ibadan_techies_meetup_mgtzlr",
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1681138175/gallery/grid1_2d36_eqhbcn",
];

const sources2 = [
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1681138086/gallery/grid1_9354f93_bvmxhg",
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686717533/people_at_the_tech_meetup_in_Nigeria_vucevn",
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686718146/happ_attendees_at_the_leading_tech_meetup_in_ibadan_grk5eu.jpg",
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1681138071/gallery/grid2_1_mjvlnd",
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686715907/a_room_filled_with_members_at_ibadan_techies_vac5fo",
];
