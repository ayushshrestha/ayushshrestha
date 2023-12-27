import React from "react";


import SectionHero from './modules/sectionhero'
import SectionPortfolio from './modules/sectionportfolio'
import SectionWorkExperience from './modules/sectionworkexperience'
import SectionSocial from './modules/sectionsocial'
import SectionVideos from './modules/sectionvideos'
import SectionBlog from './modules/sectionblogs'
import SectionTestimonials from './modules/sectiontestimonials'

export default function Home() { 
  return (
      <>
        <SectionHero/>
        <SectionPortfolio/>
        <SectionWorkExperience/>
        <SectionTestimonials />
        <SectionSocial />
        <SectionVideos />
        <SectionBlog />
      </>
    )
}



