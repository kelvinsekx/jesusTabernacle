import * as React from "react";
import { Container } from "../container";
import { Header } from "../Header/header";
import { Description } from "../Description";
import { Section } from "../Section/section";
import { Map } from "./Map";

export function LocateUs() {
  return (
    <div className="bg-[#EAF2F6]/20">
      <Container pad>
        <Section>
          <Header className="max-md:text-[1.7rem]/[26px] text-center">
            Where we are located
          </Header>
          <Description>
            Be the First to Know About Exciting Events and Activities
          </Description>
        </Section>
        <Map />
      </Container>
    </div>
  );
}
