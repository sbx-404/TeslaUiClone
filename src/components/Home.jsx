import React from "react";
import Section from "./Section";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Section
        DownArrows={true}
        heading={"Model Y"}
        textOne={"0.99% APR Financing"}
        heroText={"From $299/mo¹ Lease After Est. Gas Savings"}
        btnOne={"Order Now"}
        btnTwo={"Demo Drive"}
        backgroundImg={"/public/images/model-y.jpg"}
      />
      <Section
        heading={"Model 3"}
        textOne={"From $216/mo²"}
        heroText={"After $83/mo Est. Savings"}
        btnOne={"Order Now"}
        btnTwo={"Demo Drive"}
        backgroundImg={"/public/images/model-3.jpg"}
      />
      <Section
        heading={"Model X"}
        textOne={"From $63,990³"}
        heroText={"After Federal Tax Credit & Est. Gas Savings"}
        btnOne={"Order Now"}
        btnTwo={"Demo Drive"}
        backgroundImg={"/public/images/model-x.jpg"}
      />
      <Section
        heading={"Model S"}
        textOne={"From $66,490⁴"}
        heroText={"After Est. Gas Savings"}
        btnOne={"Order Now"}
        btnTwo={"Demo Drive"}
        backgroundImg={"/public/images/model-s.jpg"}
      />
      <Section
        heading={"Solar Panels"}
        textOne={"Schedule a Virtual Consultation"}
        heroText={""}
        btnOne={"Order Now"}
        btnTwo={"Learn More"}
        backgroundImg={"/public/images/solar-panel.jpg"}
      />
      <Section
        heading={"Solar Roof"}
        textOne={""}
        heroText={"Produce Clean Energy From Your Roof "}
        btnOne={"Order Now"}
        btnTwo={"Learn More"}
        backgroundImg={"/public/images/solar-roof.jpg"}
      />
      <Section
        heading={"Solar Roof"}
        textOne={""}
        heroText={"Produce Clean Energy From Your Roof "}
        btnOne={"Order Now"}
        backgroundImg={"/public/images/accessoriess.avif"}
      />

    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  width:100vw;

`;
