import React from 'react'

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx, Icon, IconButton, SmartImage, Tag,
} from '@/once-ui/components'
import { Projects } from '@/app/work/components/Projects'

import {
  about,
  baseURL,
  home,
  person,
} from '@/app/resources'

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
      maxWidth='m'
      fillWidth
      gap='xl'
      direction='column'
      alignItems='center'
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
            <Heading size='m' wrap='balance' variant='display-strong-m'>
             {person.name}
            </Heading>
          </RevealFx>
          <RevealFx translateY='8' delay={0.2}>
             <Heading size='s' wrap='balance' variant='display-strong-xs' >
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY='8' delay={0.2}>
            <Text
              wrap='balance'
              onBackground='neutral-weak'
              variant='body-default-l'
              size='m'
                  >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY='12' delay={0.4}>
            <Button
              data-border='rounded'
              href='/about'
              variant='tertiary'
              suffixIcon='chevronRight'
              size='m'
            >
              <Flex gap='8' alignItems='center'>
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: '-0.75rem', marginRight: '0.25rem' }}
                    src={person.avatar}
                    size='m'
                  />
                )}
                about me
              </Flex>
            </Button>
          </RevealFx>
        </Flex>
        { about.avatar.display && (
                  <RevealFx translateY='4'>
                    <Flex
                        minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                        flex={3} direction="column" alignItems="center">
                        <Avatar
                            src={person.avatar}
                            size="xl"  />
                    </Flex>
                  </RevealFx>
                )}
      </Flex>
      <RevealFx translateY='16' delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
    </Flex>
  )
}
