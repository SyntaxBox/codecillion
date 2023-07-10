import React from "react";
import CardTwin from "./CardTwin";
import { TwinCard } from "@/interfaces/Cards";
import { IconDeviceDesktopCode } from "@tabler/icons-react";
import Container from "../../UI/layout/Container";

function TwinCards(props: TwinCard[]) {
  return (
    <Container className="flex gap-6 items-center justify-between">
      <CardTwin
        image={props[0].image}
        href={props[0].href}
        pricing={props[0].pricing}
        Badge={IconDeviceDesktopCode}
        badge="Programming Paths"
        badgeHref="programming-paths"
      />
      <CardTwin
        image={props[1].image}
        href={props[1].href}
        pricing={props[1].pricing}
        Badge={IconDeviceDesktopCode}
        badge="Programming Paths"
        badgeHref="programming-paths"
      />
    </Container>
  );
}

export default TwinCards;
