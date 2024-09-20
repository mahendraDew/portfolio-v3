'use client'

import {
  AvatarGroup,
  Flex,
  Heading,
  RevealFx,
  SmartImage,
  SmartLink,
  Text
} from '@/once-ui/components'
import { useEffect, useState } from 'react'

interface ProjectCardProps {
  href: string
}

export const More: React.FC<ProjectCardProps> = ({ href }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // const handleImageClick = () => {
  //     if(images.length > 1) {
  //         setIsTransitioning(false);
  //         setTimeout(() => {
  //             const nextIndex = (activeIndex + 1) % images.length;
  //             setActiveIndex(nextIndex);
  //             setTimeout(() => {
  //                 setIsTransitioning(true);
  //             }, 630);
  //         }, 630);
  //     }
  // };

  // const handleControlClick = (index: number) => {
  //     if (index !== activeIndex) {
  //         setIsTransitioning(true);
  //         setTimeout(() => {
  //             setActiveIndex(index);
  //             setTimeout(() => {
  //                 setIsTransitioning(false);
  //             }, 630);
  //         }, 630);
  //     }
  // };

  return (
    <Flex fillWidth gap='m' direction='column'>
      <Flex
        mobileDirection='column'
        fillWidth
        paddingX='0'
        paddingTop='xs'
        paddingBottom='m'
      >
        <Flex flex={7} direction='column' gap='s'>
          <SmartLink style={{ margin: '0', width: 'fit-content' }} href={href}>
            <Text variant='body-default-s'>. . . more</Text>
          </SmartLink>
        </Flex>
      </Flex>
    </Flex>
  )
}
