'use client'
import Image from 'next/image'
import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from '../../components/hooks/use-outside-click'
import styled from 'styled-components'
import { person, about, social, baseURL } from '@/app/resources'
import { Flex, IconButton, Tag, Tooltip } from '@/once-ui/components'
import { FaArrowUp } from 'react-icons/fa6'

// Import styled components
import {
  Overlay,
  CardContainer,
  CloseButton,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardLink,
  CardDetails,
  CardList,
  CardItem
} from '../../project/styleComponent'

// const Overlay = styled(motion.div)`
//   position: fixed;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.2);
//   height: 100%;
//   width: 100%;
//   z-index: 10;
// `

// const CardContainer = styled.div`
//   position: fixed;
//   inset: 0;
//   display: grid;
//   place-items: center;
//   z-index: 100;
// `

// const CloseButton = styled(motion.button)`
//   display: flex;
//   position: absolute;
//   top: 0.5rem;
//   right: 0.5rem;
//   background-color: #dfdfdfdf;
//   border-radius: 9999px;
//   height: 1.5rem;
//   width: 1.5rem;
//   justify-content: center;
//   /* background-color: #ffffff14; */
//   align-items: center;
// `

// const Card = styled(motion.div)`
//   width: 100%;
//   max-width: 500px;
//   height: 100%;
//   max-height: 80%;
//   display: flex;
//   flex-direction: column;
//   background: rgba(
//     0,
//     0,
//     0,
//     0.267
//   ); /* Blackish background with some transparency */
//   backdrop-filter: blur(10px); /* Blur effect for glassmorphism */
//   border-radius: 1.5rem;
//   overflow: hidden;
//   border: 1px solid rgba(255, 255, 255, 0.2); /* Optional frosted border */
//   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Soft shadow */
//   -webkit-backdrop-filter: blur(10px); /* Safari support */
// `

// const CardImage = styled(Image)`
//   width: 100%;
//   height: 20rem;
//   object-fit: cover;
//   object-position: top;
// `

// const CardContent = styled.div`
//   padding: 1rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
// `

// const CardTitle = styled(motion.h3)`
//   font-weight: bold;
//   color: #c9c9c9;
// `

// const CardDescription = styled(motion.p)`
//   color: #888;
// `

// const CardLink = styled(motion.a)`
//   padding: 0.75rem;
//   font-weight: bold;
//   border-radius: 9999px;
//   text-decoration: none;
// `

// const CardDetails = styled(motion.div)`
//   padding: 1rem;
//   color: #666;
//   font-size: 0.875rem;
//   line-height: 1.5;
//   overflow-y: auto;
//   max-height: 200px;
// `

// const CardList = styled.ul`
//   /* max-width: 768px; */
//   /* margin: 0 auto; */
//   width: 100%;
//   display: flex;
//   padding: 0 20px;
//   /* background-color: green; */
//   flex-direction: column;
//   gap: 1rem;
// `

// const CardItem = styled(motion.div)`
//   padding: 1rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #3838382f;
//   cursor: pointer;
//   border-radius: 0.75rem;
//   &:hover {
//     background-color: #6868682e;
//     /* background-color: #46464630; */
//   }
// `

export function ArchiveProject () {
  const [active, setActive] = useState<
    typeof about.project.mainProjects[number] | boolean | null
  >(null)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown (event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false)
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <CardContainer>
            <CloseButton
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </CloseButton>
            <Card layoutId={`card-${active.name}-${id}`} ref={ref}>
              <CardImage
                priority
                width={200}
                height={200}
                src={active.image.src}
                alt={active.image.alt}
              />
              <CardContent>
                <div>
                  <CardTitle layoutId={`title-${active.name}-${id}`}>
                    {active.name}
                  </CardTitle>
                  <CardDescription
                    layoutId={`description-${active.oneliner}-${id}`}
                  >
                    {active.oneliner}
                  </CardDescription>
                </div>
                <CardLink
                  layoutId={`button-${active.links.ext}-${id}`}
                  href={
                    active.links.ext ? active.links.ext : active.links.github
                  }
                  target='_blank'
                >
                  <Flex>
                    {active.links.ext && (
                      <IconButton
                        key={active.links.ext}
                        href={active.links.ext}
                        icon='arrowUpRight'
                        tooltip='live'
                        size='s'
                        variant='ghost'
                      />
                    )}
                    <IconButton
                      key={active.links.github}
                      href={active.links.github}
                      icon='github'
                      tooltip='github'
                      size='s'
                      variant='ghost'
                    />
                  </Flex>
                </CardLink>
              </CardContent>
              <CardDetails>{active.description}</CardDetails>
              <Flex paddingX='s' gap='xs' overflow='scroll' wrap={true}>
                {active.tags.length > 0
                  ? active.tags.map((tag, index) => (
                      <Flex key={index}>
                        <Tooltip label={tag} />
                      </Flex>
                    ))
                  : null}
              </Flex>
            </Card>
          </CardContainer>
        ) : null}
      </AnimatePresence>
      <CardList>
        {about.project.mainProjects.map((project, index) => (
          <CardItem
            layoutId={`card-${project.name}-${id}`}
            key={`card-${project.name}-${id}`}
            onClick={() => setActive(project)}
          >
            <div style={{ display: 'flex', gap: '1rem' }}>
              <motion.div layoutId={`image-${project.name}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={project.image.src}
                  alt={project.image.alt}
                />
              </motion.div>
              <div>
                <CardTitle layoutId={`title-${project.name}-${id}`}>
                  {project.name}
                </CardTitle>
                <CardDescription
                  layoutId={`description-${project.oneliner}-${id}`}
                >
                  {project.oneliner}
                </CardDescription>
              </div>
            </div>
            <motion.div layoutId={`button-${project.name}-${id}`}>
              <Flex gap='s' direction='row'>
                {project.links.ext && (
                  <IconButton
                    key={project.links.ext}
                    href={project.links.ext}
                    icon='arrowUpRight'
                    tooltip='live'
                    size='s'
                    variant='ghost'
                  />
                )}
                <IconButton
                  key={project.links.github}
                  href={project.links.github}
                  icon='github'
                  tooltip='github'
                  size='s'
                  variant='ghost'
                />
              </Flex>
            </motion.div>
          </CardItem>
        ))}
      </CardList>
    </>
  )
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05
        }
      }}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </motion.svg>
  )
}

// const cards = [
//   {
//     description: 'Lana Del Rey',
//     title: 'Summertime Sadness',
//     src: '/images/projects/project-01/cover-01.jpg',
//     ctaText: 'Play',
//     ctaLink: 'https://ui.aceternity.com/templates',
//     content: () => {
//       return (
//         <p>
//           Lana Del Rey, an iconic American singer-songwriter, is celebrated for
//           her melancholic and cinematic music style. Born Elizabeth Woolridge
//           Grant in New York City, she has captivated audiences worldwide with
//           her haunting voice and introspective lyrics. <br /> <br /> Her songs
//           often explore themes of tragic romance, glamour, and melancholia,
//           drawing inspiration from both contemporary and vintage pop culture.
//           With a career that has seen numerous critically acclaimed albums, Lana
//           Del Rey has established herself as a unique and influential figure in
//           the music industry, earning a dedicated fan base and numerous
//           accolades.
//         </p>
//       )
//     }
//   },
//   {
//     description: 'Babbu Maan',
//     title: 'Mitran Di Chhatri',
//     src: '/images/projects/project-01/cover-01.jpg',
//     ctaText: 'Play',
//     ctaLink: 'https://ui.aceternity.com/templates',
//     content: () => {
//       return (
//         <p>
//           Babu Maan, a legendary Punjabi singer, is renowned for his soulful
//           voice and profound lyrics that resonate deeply with his audience. Born
//           in the village of Khant Maanpur in Punjab, India, he has become a
//           cultural icon in the Punjabi music industry. <br /> <br /> His songs
//           often reflect the struggles and triumphs of everyday life, capturing
//           the essence of Punjabi culture and traditions. With a career spanning
//           over two decades, Babu Maan has released numerous hit albums and
//           singles that have garnered him a massive fan following both in India
//           and abroad.
//         </p>
//       )
//     }
//   },

//   {
//     description: 'Metallica',
//     title: 'For Whom The Bell Tolls',
//     src: '/images/projects/project-01/cover-01.jpg',
//     ctaText: 'Play',
//     ctaLink: 'https://ui.aceternity.com/templates',
//     content: () => {
//       return (
//         <p>
//           Metallica, an iconic American heavy metal band, is renowned for their
//           powerful sound and intense performances that resonate deeply with
//           their audience. Formed in Los Angeles, California, they have become a
//           cultural icon in the heavy metal music industry. <br /> <br /> Their
//           songs often reflect themes of aggression, social issues, and personal
//           struggles, capturing the essence of the heavy metal genre. With a
//           career spanning over four decades, Metallica has released numerous hit
//           albums and singles that have garnered them a massive fan following
//           both in the United States and abroad.
//         </p>
//       )
//     }
//   },
//   {
//     description: 'Led Zeppelin',
//     title: 'Stairway To Heaven',
//     src: '/images/projects/project-01/cover-01.jpg',
//     ctaText: 'Play',
//     ctaLink: 'https://ui.aceternity.com/templates',
//     content: () => {
//       return (
//         <p>
//           Led Zeppelin, a legendary British rock band, is renowned for their
//           innovative sound and profound impact on the music industry. Formed in
//           London in 1968, they have become a cultural icon in the rock music
//           world. <br /> <br /> Their songs often reflect a blend of blues, hard
//           rock, and folk music, capturing the essence of the 1970s rock era.
//           With a career spanning over a decade, Led Zeppelin has released
//           numerous hit albums and singles that have garnered them a massive fan
//           following both in the United Kingdom and abroad.
//         </p>
//       )
//     }
//   },
//   {
//     description: 'Mustafa Zahid',
//     title: 'Toh Phir Aao',
//     src: '/images/projects/project-01/cover-01.jpg',
//     ctaText: 'Play',
//     ctaLink: 'https://ui.aceternity.com/templates',
//     content: () => {
//       return (
//         <p>
//           &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
//           renowned for its intense storyline and powerful performances. Directed
//           by Mohit Suri, the film has become a significant work in the Indian
//           film industry. <br /> <br /> The movie explores themes of love,
//           redemption, and sacrifice, capturing the essence of human emotions and
//           relationships. With a gripping narrative and memorable music,
//           &quot;Aawarapan&quot; has garnered a massive fan following both in
//           India and abroad, solidifying Emraan Hashmi&apos;s status as a
//           versatile actor.
//         </p>
//       )
//     }
//   }
// ]
