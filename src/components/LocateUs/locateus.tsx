import * as React from "react";
import { Container } from "../container";
import { Header } from "../Header/header";
import { Description } from "../Description";

export function LocateUs() {
  return (
    <div className="bg-[#EAF2F6]">
      <Container pad>
        <div className="text-center">
          <Header>Where we are located</Header>
          <Description>
          Be the First to Know About Exciting Events and Activities
          </Description>
        </div>
      </Container>
    </div>
  );
}

