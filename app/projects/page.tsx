import type { Metadata } from 'next'
import Link from 'next/link'
import fs from 'fs'
import Image from 'next/image'
 
export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Professional, projects, portfolio',
};

type Project = {
    title: string,
    description: string,
    languages: string[],
    img: string,
    path: string,
}

// inspired by https://www.geeksforgeeks.org/how-to-display-text-on-hover-over-image-using-tailwind-css-in-react-js/
const ProjectCard = (project: Project) => {
  return (
    <div className='shadow-lg p-6 rounded-xl'>
        <div className="group relative block w-full bg-slate-200">
            <img src={project.img} 
                className="absolute object-cover w-full h-full rounded-lg group-hover:opacity-10" 
                alt="project img">
            </img>
            <div className="p-4 flex text-center w-full h-full items-center">
                            {/* Hidden content */}
                            <div className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0">
                                <div className="p-1 m-auto">
                                    <p className="text-xs text-slate-800">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                            {/* End of hidden content */}
            </div>
        </div>
        <div className='pt-4 pb-2'>
          <a href={project.path} className="text-lg font-medium hover:text-blue-800" target="_blank">{project.title}</a>
        </div>
        <div className='flex flex-row flex-wrap'>
            {project.languages.map((language, idx) => (
            <p className='text-xs text-gray-800 border border-gray-400 py-1 px-2 m-1 rounded-full' key={idx}> {language} </p>
            ))}
        </div>
    </div>
  )
}

const ProjectPage = async() => {
  return (
    <div className="py-8 px-4 md:px-24 lg:px-36 font-sans">
      <div className="text-center ">
        <h1 className='text-2xl font-bold'>Projects</h1>
        <p>Random stuff I've done; hover for some details!</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <ProjectCard
            title={'Walk with Me: Computer Vision on the White Cane'} 
            description={'Utilizing computer vision on a white cane, \
            the user is notified of incoming obstacles from the \
            left, front, and right with 96% accuracy via tactile input (vibration motors).\
            Walk with Me is a smart cane 1/10th of the market price costing about $61.\
            My team placed first in "Robotics and Intelligent Machines" in the \
            Alameda County Science and Engineering Fair qualified for the \
            California State Fair. We also received the Chevron Innocation Award.'} 
            languages={['Python', 'OpenCV', 'YOLOv3', 'Raspberry Pi']} 
            img={'/acsef.png'}
            path={'https://github.com/Fredenck/acsef2021#readme'}
          />
        <ProjectCard 
            title={'Google Drive Submission Validation'} 
            description={'As a TA during the pandemic, I was to grade on completeness\
             and validate submissions against empty/unrelated files in Google Drive.\
            I used Google API to identify the 144 students, \
            leading to a 400% increase in efficiency and 100% accuracy.\
            I bypassed unnamed files (where I would need to chase down the student)\
            by directly examining metadata of each submission.'} 
            languages={['Node.js', 'Google Drive API']} 
            img={'/juniorTA.png'}
            path={'https://github.com/Fredenck/juniorTA#readme'}
          />
          <ProjectCard 
              title={'Retina and Finger Vein Classification'} 
              description={'Finger veins are unique to the individual\
              and provide more security than finger prints\
              As a research intern for Prof Wenyao Xu at SUNY UBuffalo,\
              I created a custom Local Linear Binary Pattern approach to\
              extract such veins and fed this into a variety of common ML\
              models. I applied similar techniques on retina veins and CT \
              scans of the chest to classify pneumonia.'} 
              languages={['Python', 'Feature Extraction', 'Machine Learning']} 
              img={'/wenyao.png'}
              path={'https://github.com/Fredenck/IoT-Intern/tree/main#readme'}
            />
            <ProjectCard
                title={'Personal Website'} 
                description={'Modern web-development with Next.js 13\'s App Router and TailwindCSS.\
                Using Contentlayer ^0.3.4 (beta) to parse MDX and frontmatter (YAML) into JSON during build time\
                yielding statically generated pages with dynamic routes.'} 
                languages={['Next.js 13', 'Tailwind', 'Contentlayer']} 
                img={'/website.png'}
                path={'https://github.com/Fredenck/Escape-the-Volcano#readme'}
              />
        <ProjectCard
            title={'Accelerating Machine Learning'} 
            description={'Develop and test various approved US patentes under Khanh Nguyen.\
            1) Tuning and Accelerating Machine Learning using Unmixed Second Order Derivatives:\
            Created convolutional neural networks and applied a custom backpropogation method to \
            accelerate convergence.\
            2) Method and Apparatus for Controlling Robots Arms Using Elastic Distortion Simulations:\
            customize U2D2 motors with machine learning to achieve inverse kinematics.'} 
            languages={['Pytorch', 'Machine Learning']} 
            img={'/petanano.png'}
            path={''}
          />
          <ProjectCard
              title={'Analyzing SARS-CoV-2 Antbodies'} 
              description={'In the Coronavirus Visualization Team under Harvard\'s Erevna Program, \
              I created visualizations for IgG and IgM antibodies of patients with SARS-CoV-2 (Covid-19).\
              On the side, I also explored the Shiny package and created a basic interactive visualization website'} 
              languages={['R', 'Data Visualization']} 
              img={'/erevna.jpg'}
              path={'https://github.com/Fredenck/Analyzing-Data-of-SARS-CoV-2-Serology-Antibody-IgG-Tests/tree/master#readme'}
            />
        <ProjectCard
            title={'Escape the Volcano'} 
            description={'Navigate a 3rd person controller to escape the \
            crater of a volcano. Comes with guns, falling rocks, \
            teleporters, lava, two types of enemies. Created with Unity 3D and C# in \
            UCR Extension: Game Design with Ronald Bourbeau!'} 
            languages={['Unity', 'C#']} 
            img={'/escape-the-volcano.png'}
            path={'https://github.com/Fredenck/fredsite'}
          />

      </div>
    </div>
  )
}

export default ProjectPage