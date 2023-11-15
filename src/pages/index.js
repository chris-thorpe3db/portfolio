import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} 

from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Chris Thorpe Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Myself" />
        <InterestsSection sectionId="interests" heading="Interests" />
        <ProjectsSection sectionId="projects" heading="Stuff I've worked on" />
        <ContactSection sectionId="contact" heading="Get in touch" />
      </Page>
    </>
  );
}
