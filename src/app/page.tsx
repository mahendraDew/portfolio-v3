import React from 'react'

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx, Icon, IconButton, SmartImage, SmartLink, Tag,
} from '@/once-ui/components'
import { Projects } from '@/app/work/components/Projects'

import {
  about,
  baseURL,
  home,
  person,
} from '@/app/resources'
import { MoreBtn } from './components/MoreBtn'
import Work from './work/page'

export function generateMetadata () {
  const title = home.title
  const description = home.description
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  }
}

export default function Home () {
  return (
    <Flex
      maxWidth='s'
      fillWidth
      gap='xl'
      direction='column'
      alignItems='center'
      paddingX='s'
    >
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              '@type': 'Person',
              name: person.name,
              image: {
                '@type': 'ImageObject',
                url: `${baseURL}${person.avatar}`
              }
            }
          })
        }}
      />
      <Flex fillWidth direction='row' paddingY='l' gap='m'>
        <Flex direction='column' fillWidth maxWidth='s' gap='m'>
       
          <RevealFx translateY='4'>
            <Text
              wrap='balance'
              onBackground='neutral-weak'
              variant='body-default-l'
              size='m'
                  >
              hey, I'm
            </Text>
            <Heading size='s' wrap='balance' variant='display-strong-s'>
             {person.name}
            </Heading>
          </RevealFx>
          <RevealFx translateY='8' delay={0.2}>
             <Heading  wrap='balance' variant='label-strong-l' onSolid='neutral-weak' style={{color: '#959595'}}>
              {home.headline}
            </Heading>
             {/* <Text
              wrap='balance'
              onBackground='neutral-weak'
              variant='body-default-xl'
              size='m'
                  >
              {home.headline}
            </Text> */}
          </RevealFx>
          <RevealFx translateY='8' delay={0.2}>
            <Text
              wrap='balance'
              onBackground='neutral-weak'
              variant="label-default-m"
              size='m'
                  >
              {home.sublineOne}
            </Text>
          </RevealFx>
          <RevealFx translateY='8' delay={0.2}>
            <Text
              wrap='balance'
              onBackground='neutral-weak'
              variant='label-default-m'
              size='m'
                  >
              {home.sublineTwo}
            </Text>
          </RevealFx>
          <RevealFx translateY='8' delay={0.2}>
            <Text
              wrap='balance'
              onBackground='neutral-weak'
              variant='label-default-m'
              size='m'
                  >
              {home.sublineThree}
            </Text>
            
          </RevealFx>
         
          <RevealFx translateY='12' delay={0.4}>
            <Button
              data-border='rounded'
              href='https://drive.google.com/file/d/1U5olv_D70vkZmJllOu_cXQFgHzfq3VJo/view?usp=sharing'
              variant='tertiary'
              suffixIcon='chevronRight'
              size='m'
            >
              <Flex gap='8' alignItems='center'>
                resume
              </Flex>
            </Button>
          </RevealFx>
        </Flex>
        {/* { about.avatar.display && (
                  <RevealFx translateY='4'>
                    <Flex
                        minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                        flex={3} direction="column" alignItems="center">
                        <Avatar
                            src={person.avatar}
                            size="xl"  />
                    </Flex>
                  </RevealFx>
                  )} */}
        <RevealFx translateY='4' style={{width: '50%'}}>
          <Flex
             paddingBottom="xl" gap="m" paddingLeft='l'
              flex={3} direction="column" alignItems="center">
             <SmartImage
              src={person.avatar}
              alt="Image description"
              aspectRatio="4/3"
              radius="l"
              objectFit="cover"
            />
          </Flex>
        </RevealFx>
            {/* <RevealFx
                    style={{width: '100%'}}
                    delay={0.4}
                   
                    speed="fast">
                    <SmartImage
                        tabIndex={0}
                        radius="l"
                        alt='Img desc'
                        aspectRatio="4/3"
                        src={person.avatar}
                        objectFit='cover'
                        />
                </RevealFx> */}
      </Flex>
      <RevealFx translateY='16' delay={0.6}>
        <Work />
        {/* <Projects range={[1, 1]} /> */}
      </RevealFx>
    </Flex>
  )
}
