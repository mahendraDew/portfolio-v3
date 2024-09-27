'use client'
import Image from 'next/image'
import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from '../components/hooks/use-outside-click'
import { about } from '@/app/resources'
import { Flex, IconButton, Text, Tooltip } from '@/once-ui/components'

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
  CardItem,
  CardTags
} from './styleComponent'


export function Projects () {
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
                width={800}
                height={800}
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
              <CardTags>

                <Flex paddingX='s' gap='xs' overflow='scroll' wrap={true}>
                  {active.tags.length > 0
                    ? active.tags.map((tag, index) => (
                      <Flex key={index}>
                          <Tooltip label={tag} />
                        </Flex>
                      ))
                      : null}
                </Flex>
              </CardTags>
            </Card>
          </CardContainer>
        ) : null}
      </AnimatePresence>
      <CardList>
        {about.project.mainProjects.map((project, index) => (
          <CardItem
            layoutId={`card-${project.name}-${id}`}
            key={`card-${project.name}-${id}-${index}`}
            onClick={() => setActive(project)}
          >
            <div style={{ display: 'flex', gap: '1rem' }}>
              <motion.div layoutId={`image-${project.name}-${id}`}>
                <Image
                  width={133}
                  height={75}
                  src={project.image.src}
                  alt={project.image.alt}
                />
              </motion.div>
              <div>
                <CardTitle layoutId={`title-${project.name}-${id}`} >
                  {project.name}
                </CardTitle>
                <CardDescription
                  layoutId={`description-${project.oneliner}-${id}`}
                >
                  <Text  wrap='balance'
              onBackground='neutral-weak'
              variant='label-default-m'>
                  {project.oneliner}

                  </Text>
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
      width='30'
      height='30'
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
