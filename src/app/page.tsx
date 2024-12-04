import React from 'react'
import {
  Heading,
  Flex,
  Text,
  Button,
  RevealFx,
  SmartImage,
  Avatar
} from '@/once-ui/components'
import { about, baseURL, home, person } from '@/app/resources'
import Work from './work/work'
import { Projects } from './project/Projects'
import { MoreBtn } from './components/MoreBtn'

import styles from '@/app/page.module.scss'


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
      gap='l'
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
      <Flex fillWidth direction='column' gap='s'>
        <Flex gap='s' paddingLeft='s' className={styles.displayflex} >
          <RevealFx translateY='4' className={styles.width}>
            <Flex
             alignItems="center"
              justifyContent="center"
              onBackground="brand-strong"
              paddingTop='4'
            >
              <SmartImage
                src={person.avatar}
                alt='Image description'
                aspectRatio='1/1'
                radius='m'
                // objectFit='cover'
                style={{borderRadius: "50%"}}
              
              />
            </Flex>
          </RevealFx>
          <RevealFx translateY='4'>
            <Text
              wrap='balance'
              onBackground='neutral-weak'
              variant='body-default-l'
              
            >
              hey, I'm
            </Text>
            <Heading  wrap='balance' variant='display-strong-s'>
              {person.name}
            </Heading>
            <Heading
              wrap='balance'
              variant='label-strong-l'
              onSolid='neutral-weak'
              style={{ color: '#959595' }}
            >
              {home.headline}
            </Heading>
          </RevealFx>
          {/* <RevealFx translateY='8' delay={0.2}>
          </RevealFx> */}

        </Flex>
        <Flex direction='column' fillWidth maxWidth='s' gap='s' paddingX='s'>
          <RevealFx translateY='8' delay={0.2}>
            <Text
              wrap='balance'
              onBackground='neutral-weak'
              variant='label-default-m'
              
            >
              {home.sublineOne}
            </Text>
          </RevealFx>
          <RevealFx translateY='8' delay={0.2}>
            <Text
              wrap='balance'
              onBackground='neutral-weak'
              variant='label-default-m'
              
            >
              {home.sublineTwo}
            </Text>
            <MoreBtn />
          </RevealFx>
          

          <RevealFx translateY='12' delay={0.4}>
            <Button
              data-border='rounded'
              href='https://drive.google.com/file/d/1Gs-b4C-u5huT79_Dh25i0K7owEyGRDu4/view?usp=sharing'
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

        {/* <RevealFx translateY='4' style={{ width: '50%' }}>
          <Flex
            paddingBottom='xl'
            gap='m'
            paddingLeft='l'
            flex={3}
            direction='column'
            alignItems='center'
          >
            <SmartImage
              src={person.avatar}
              alt='Image description'
              aspectRatio='4/3'
              radius='l'
              objectFit='cover'
            />
          </Flex>
        </RevealFx> */}
      </Flex>

      <RevealFx translateY='16' delay={0.6}>
        <Work />
      </RevealFx>
      {/* <RevealFx translateY="16" delay={0.6}> */}
      <Flex fillWidth maxWidth="m"  direction='column' gap='s'>
          <Heading
            as='h2'
            id={about.project.title}
            variant='display-strong-s'
            marginBottom='m'
            >
            {about.project.title.toLowerCase()}
          </Heading>
        <Projects />
        {/* </RevealFx> */}
        <RevealFx translateY='12' delay={0.4} style={{ paddingLeft:"20px" }}>
          <Button
            data-border='rounded'
            href='/archive'
            variant='tertiary'
            suffixIcon='chevronRight'
            
          >
            <Flex gap='8' alignItems='center'>
              archive
            </Flex>
          </Button>
        </RevealFx>
      </Flex>
    </Flex>
  )
}
