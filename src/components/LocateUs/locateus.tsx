import * as React from "react";
import { Container } from "../container";
import { Header } from "../Header/header";

export function LocateUs() {
  return (
    <div className="bg-[#EAF2F6]">
      <Container pad>
        <div className="text-center">
          <Header>Where we are located</Header>
          <p className="text-tb-grey2 text-base" id="gallery">
          Be the First to Know About Exciting Events and Activities
          </p>
        </div>
      </Container>
    </div>
  );
}

