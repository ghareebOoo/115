"use client"
import React, { useMemo } from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TabsData from './TabsData';
import { AnimateText } from './About';

import exp1 from "../../public/assets/journey/experience/logo-1.svg"
import exp2 from "../../public/assets/journey/experience/logo-2.svg"
import exp3 from "../../public/assets/journey/experience/logo-3.svg"
import exp4 from "../../public/assets/journey/experience/logo-4.svg"
import edu1 from "../../public/assets/journey/education/logo-1.svg"
import edu2 from "../../public/assets/journey/education/logo-2.svg"




export default function Journey() {

  const journey = useMemo(()=>
  [
  {
    type: "experience",
    company: "Odeao Labs",
    logoUrl: exp1,
    position: "Web Developer",
    duration: "Jul 2021 - Persent",
    description:
      "Build websites and web apps using Next.js, Tailwind CSS and , Javascript. Worked on scalable, user-friendly Solutions.",
  },
  {
    type: "experience",
    company: "Stack3d Lab",
    logoUrl: exp2,
    position: "Frontend Developer",
    duration: "Mar 2019 - Jun 2021",
    description:
      "Developed reponsive websites with HTML, CSS, and JavaScript. Ensured seamless user experience.",
  },
  {
    type: "experience",
    company: "Magnolia",
    logoUrl: exp3,
    position: "UI/UX Developer",
    duration: "Jan 2017 - Feb 2019",
    description:
      "Designed web iterfaces with cross-browse compatibility and reponsiveness. Delivered pixel-perfect designs.",
  },
  {
    type: "experience",
    company: "Warpspeed Inc",
    logoUrl: exp4,
    position: "Full Stack Developer",
    duration: "Aug 2015 - Dec 2016",
    description:
      "Developed full-stack solutions using React and Node.js. Integrated frontend and backend technologies.",
  },
  {
    type: "education",
    institution: "Udemy",
    logoUrl: edu1,
    qualification: "Web Development Bootcamp",
    duration: "Jan 2020 - Apr 2020",
    description:
      "Learned full-stack development concepts, focusing on React, Node.js, and APIs Completed hands-on projects to solidify skills.",
  },
  {
    type: "education",
    institution: "CodeAcademy BootCamp",
    logoUrl: edu2,
    qualification: "Full Stack Dev Cert",
    duration: "Jan 2020 - May 2020",
    description:
      "Gained experience in frontend and backend technologies, including React, Node. js, and databases.",
  },
  {
    type: "education",
    institution: "Design Intitute",
    logoUrl: edu1,
    qualification: "UI/UX Diploma",
    duration: "Aug 2018 - Dec 2018",
    description:
      "Studied advanced principles of user interface and user experience design. Developed skills in prototyping, wireframing, and usanility testing.",
  },
  {
    type: "education",
    institution: "Business School",
    logoUrl: edu2,
    qualification: "Project Management Cert ",
    duration: "Mar 2021 - Jun 2021",
    description:
      "Completed certification in project management, focusing on Agile methodologies and effective team colloboration.",
  },
  {
    type: "skill",
    name: "HTML",
    icon: <FaHtml5 />,
    duration: "Learned in 2015",
    description:
      "Crafted structured web content using HTML effctively for modern websites, ensuring semanting marckup and accessibility.",
  },
  {
    type: "skill",
    name: "CSS",
    icon: <FaCss3Alt />,
    duration: "Learned in 2015",
    description:
      "Styled responsive web pages using CSS, ensuring an appealing user experience with modern design principles and layouts.",
  },
  {
    type: "skill",
    name: "Javascript",
    icon: <FaJs />,
    duration: "Learned in 2016",
    description:
      "Implemented javascript for interactivity, enhancing user engagement on websites through dynamic content and features.",
  },
  {
    type: "skill",
    name: "React.js",
    icon: <FaReact />,
    duration: "Learned in 2018",
    description:
      "Built dynamic user interfaces using React.js, optimizing component-driven design for seamless user experience and efficiency.",
  },
  {
    type: "skill",
    name: "WordPress",
    icon: <FaWordpress />,
    duration: "Learned in 2020",
    description:
      "Developed dynamic websites with WordPress, simplifying content management processes while ensuring scalability and performance.",
  },
  {
    type: "skill",
    name: "Figma",
    icon: <FaFigma />,
    duration: "Learned in 2018",
    description:
      "Designed user interfaces in Figma, facilitating collaborating and rapid prototyping to meet user needs and project goals.",
  },
]

,[])
  const text = "My Professional Journey"
  const one = useMemo(() => text.slice(0, 2).split(""), []);
  const two = useMemo(() => text.slice(2, 15).split(""), []);
  const three = useMemo(() => text.slice(15).split(""), []);
  return (
    <>
    <div className="p-8 w-full" id="journey">
      <div className='flex justify-center items-center gap-1'>
        <AnimateText letters={one} delay={0}/>
        <AnimateText letters={two} delay={1}/>
        <AnimateText letters={three} delay={4.5}/>
      </div>
      <Tabs defaultValue="experience" className="w-full flex flex-col items-center mt-5">
        <TabsList className='w-[280px] bg-white border-accent border-2 py-6 rounded-2xl px-4 mb-5'>
          <TabsTrigger value="experience" className='text-[16px] cursor-pointer'>Experience</TabsTrigger>
          <TabsTrigger value="education" className='text-[16px] cursor-pointer'>Education</TabsTrigger>
          <TabsTrigger value="skill" className='text-[16px] cursor-pointer'>Skill</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className='w-full'>
          <div className='flex flex-col gap-10'>
            {journey.filter((item)=> {
              return item.type === "experience"}).map((exp , index)=>{
                return <TabsData key={index} {...exp}/>
              })
              }
          </div>
        </TabsContent>
        <TabsContent value="education" className='w-full'>
          <div className='flex flex-col gap-10'>
            {journey.filter((item)=> {
              return item.type === "education"}).map((edu , index)=>{
                return <TabsData key={index} {...edu}/>
              })
              }
          </div>
        </TabsContent>
        <TabsContent value="skill" className='w-full'>
          <div className='flex flex-col gap-10'>
            {journey.filter((item)=> {
              return item.type === "skill"}).map((skl , index)=>{
                return <TabsData key={index} {...skl}/>
              })
              }
          </div>
        </TabsContent>
      </Tabs>
    </div>
    </>
  )
}
