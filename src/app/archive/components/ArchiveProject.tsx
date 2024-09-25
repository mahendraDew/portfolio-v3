'use client'
import Image from 'next/image'
import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from '../../components/hooks/use-outside-click'
import styled from 'styled-components'
import { person, about, social, baseURL } from '@/app/resources'
import { Flex, IconButton, Tag, Text, Tooltip } from '@/once-ui/components'
import { FaArrowUp } from 'react-icons/fa6'

// Import styled components
import {
  CardTitle,
  CardDescription,
  CardList,
  CardItem
} from './ArchiveStyleComponent'



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
     
      <CardList>
        {about.project.ArchiveProjects.map((project, index) => (
          <CardItem
            layoutId={`card-${project.name}-${id}`}
            key={`card-${project.name}-${id}`}
            
          >
            <div style={{ display: 'flex', gap: '1rem' }}>
              
              <div>
                <CardTitle layoutId={`title-${project.name}-${id}`}>
                  {project.name}
                </CardTitle>
                <Flex as='ul' direction='column'>
                  <CardDescription
                    layoutId={`description-${project.oneliner}-${id}`}
                  >
                    <Text
                      as='li'
                      variant='label-default-m'
                      key={`${project.oneliner}-${index}`}
                    >
                      {/* {achievement} */}
                    {project.oneliner}
                    </Text>
                  </CardDescription>
                 
                  
                </Flex>
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
