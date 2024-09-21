"use client"
// import { getPosts } from '@/app/utils'
import { Button, Flex, Heading, IconButton, SmartImage, Text } from '@/once-ui/components'
import { person, about, social, baseURL } from '@/app/resources'
import { useState } from 'react';

import { ProjectCard } from '@/app/components'
import { More } from '../components/More';

interface ProjectsProps {
  range?: [number, number?]
}

export function Projects ({ range }: ProjectsProps) {
//   let allProjects = getPosts(['src', 'app', 'work', 'projects'])

//   const sortedProjects = allProjects.sort((a, b) => {
//     return (
//       new Date(b.metadata.publishedAt).getTime() -
//       new Date(a.metadata.publishedAt).getTime()
//     )
//   })

//   const displayedProjects = range
//     ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
//     : sortedProjects
    const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null);

  return (
    <Flex fillWidth maxWidth='m' direction='column'>
      {about.work.display && (
        <>
          <Heading
            as='h2'
            id={about.work.title}
            variant='display-strong-s'
            marginBottom='m'
          >
            {about.project.title}
          </Heading>
          <Flex direction='column' fillWidth gap='s' marginBottom='40'>
            {about.project.mainProjects.map((mainProject, index) => (
              <Flex
                key={`${mainProject.name}-${mainProject.oneliner}-${index}`}
                fillWidth
                direction='column' radius='m' padding='s'
                style={{
                    backgroundColor: hoveredProjectIndex === index ? '#5a5a5a50' : '#5a5a5a24',
                    transition: 'background-color 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={() => setHoveredProjectIndex(index)}
                  onMouseLeave={() => setHoveredProjectIndex(null)}
              >
                <Flex justifyContent='flex-start' direction='row' fillWidth>
                    {mainProject.image && (
                        <Flex  gap='12' wrap  alignItems='center'>
                            <Flex
                            key={index}
                            border='neutral-medium'
                            borderStyle='solid-1'
                            radius='m'
                            minWidth={mainProject.image.width}
                            height={mainProject.image.height}
                            alignItems='center'
                            
                            justifyContent='center'
                            >
                            <SmartImage
                                enlarge
                                radius='m'
                                sizes={mainProject.image.width.toString()}
                                alt={mainProject.image.alt}
                                src={mainProject.image.src}
                                
                            />
                            </Flex>
                        </Flex>
                    )}
                    <Flex
                    fillWidth
                    justifyContent='space-between'
                    alignItems='center'
                    marginBottom='4'
                    paddingLeft='s'
                   
                    >
                        <a
                        href={mainProject.links.ext || mainProject.links.github}
                        style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} target='_blank'
                        >
                            <Text id={mainProject.name} variant='heading-strong-l' 
                             
                            onBackground={hoveredProjectIndex === index ? 'neutral-strong' : 'neutral-weak'}
                            onMouseEnter={() => setHoveredProjectIndex(index)}
                            onMouseLeave={() => setHoveredProjectIndex(null)} >
                                {mainProject.name}
                            </Text>
                        </a>
                        <Flex  gap="8" paddingRight='s'>
                            {/* external  link */}
                            {mainProject.links.ext && (
                                <IconButton
                                key={mainProject.name}
                                href={mainProject.links.github}
                                icon="arrowUpRight"
                                tooltip={mainProject.name}
                                size="s"
                                variant="ghost"/>
                            )}
                            {/* github ka link */}
                            <IconButton
                                key={mainProject.name}
                                href={mainProject.links.github}
                                icon="github"
                                tooltip={mainProject.name}
                                size="s"
                                variant="ghost"/>
                        </Flex>
                    </Flex>

                </Flex>
                
                <Flex as='ul' direction='column'>
                  <Text
                    as='li'
                    variant='label-default-m'
                    onBackground={hoveredProjectIndex === index ? 'neutral-strong' : 'neutral-weak'}
                    onMouseEnter={() => setHoveredProjectIndex(index)}
                    onMouseLeave={() => setHoveredProjectIndex(null)} 
                    key={`${mainProject.name}-${index}`}
                  >
                    {mainProject.oneliner}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
          
          <Button
           href='/archive'
           data-border='rounded'
           variant="tertiary"
           size="m"
           label="View Archive"
           suffixIcon="chevronRight"
           />
        </>
      )}
    </Flex>
  )
}
