import React from "react";
import HeroSlider, { Slide } from "hero-slider";

const BasicSlider = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) => {
        console.log("onBeforeChange", previousSlide, nextSlide);
      }}
      onChange={(nextSlide) => {
        console.log("onChange", nextSlide);
      }}
      onAfterChange={(nextSlide) => {
        console.log("onAfterChange", nextSlide);
      }}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)",
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "100vh",
      }}
    >
      <Slide
        background={{
          backgroundImage:
            "https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg",
          backgroundAttachment: "fixed",
        }}
      />
      <Slide
        background={{
          backgroundImage:
            "https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg",
          backgroundAttachment: "fixed",
        }}
      />
      <Slide
        background={{
          backgroundImage:
            "https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg",
          backgroundAttachment: "fixed",
        }}
      />
      <Slide
        background={{
          backgroundImage:
            "https://upload.wikimedia.org/wikipedia/commons/3/3c/Red_fox_in_Sweden.jpg",
          backgroundAttachment: "fixed",
        }}
      />
    </HeroSlider>
  );
};

export default BasicSlider;
