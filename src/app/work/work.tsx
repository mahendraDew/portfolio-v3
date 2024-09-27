import { Flex, Heading, Text } from '@/once-ui/components'
import { person, about, social, baseURL } from '@/app/resources'


export default function Work () {

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
            {about.work.title.toLowerCase()}
          </Heading>
          <Flex direction='column' fillWidth gap='l' marginBottom='40'>
            {about.work.experiences.map((experience, index) => (
              <Flex
                key={`${experience.company}-${experience.role}-${index}`}
                fillWidth
                direction='column'
              >
                <Flex
                  fillWidth
                  justifyContent='space-between'
                  alignItems='flex-end'
                  marginBottom='4'
                >
                  <Text id={experience.company} variant='heading-strong-l'>
                    {experience.company}
                  </Text>
                  <Text
                    variant='heading-default-xs'
                    onBackground='neutral-weak'
                  >
                    {experience.timeframe.start} - {experience.timeframe.end}
                  </Text>
                </Flex>
                <Text
                  variant='body-default-s'
                  onBackground='brand-weak'
                  marginBottom='xs'
                >
                  {experience.role}
                </Text>
                <Flex as='ul' direction='column'>
                  {experience.achievements.map((achievement, index) => (
                    <Text
                      as='li'
                      onBackground='neutral-weak'
                      variant='label-default-m'
                      key={`${experience.company}-${index}`}
                    >
                      {achievement}
                    </Text>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </>
      )}
    </Flex>
  )
}
