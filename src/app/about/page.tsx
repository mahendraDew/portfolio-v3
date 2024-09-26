import { Avatar, Button, Flex, Heading, Icon, IconButton, SmartImage, Tag, Text } from '@/once-ui/components';
import { person, about, social, baseURL, home } from '@/app/resources'
import TableOfContents from '@/app/about/components/TableOfContents';
import styles from '@/app/about/about.module.scss'

export function generateMetadata() {
	const title = about.title;
	const description = about.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/blog`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}



export default function About() {
    return (
        <Flex
            fillWidth maxWidth="s"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: home.description,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}/images/${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:')) // Filter out empty links and email links
                            .map((item) => item.link),
                        worksFor: {
                            '@type': 'Organization',
                            name: about.work.experiences[0].company || ''
                        },
                    }),
                }}
            />
            
            <Flex
                fillWidth
                mobileDirection="column" justifyContent="center">
               
                <Flex
                    className={styles.blockAlign}
                    fillWidth flex={9} maxWidth={40} direction="column">
                    <Flex fillWidth gap='l' direction='row'
                         mobileDirection="column" justifyContent="center">
                        <Flex
                            fillWidth
                            gap='m'
                            paddingBottom='xl'
                            paddingLeft='l'
                            paddingTop='s'
                            // flex={3}
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
                        
                        <Flex
                            id={about.intro.title}
                            fillWidth minHeight="160"
                            direction="column" justifyContent="center"
                            marginBottom="32">
                            
                            <Heading
                                className={styles.textAlign}
                                variant="display-strong-l" marginBottom='s'>
                                {person.name}
                            </Heading>
                            <Text
                                className={styles.textAlign}
                                variant="body-default-l"
                                onBackground="neutral-weak">
                                {person.role}
                            </Text>
                            {social.length > 0 && (
                                <Flex
                                className={styles.blockAlign}
                                    paddingTop="20" paddingBottom="8" gap="8" wrap>
                                    {social.map((item) => (
                                        item.link && (
                                            <IconButton
                                                key={item.name}
                                                href={item.link}
                                                icon={item.icon}
                                                size="m"
                                                tooltip={item.name}
                                                tooltipPosition="bottom"
                                                variant="tertiary"
                                                />
                                            )
                                        ))}
                                </Flex>
                            )}
                        </Flex>
                    </Flex>

                    { home.description && (
                        <Flex direction='column' gap='s'>
                            <Flex
                                direction="column"
                                textVariant="label-default-l"
                                fillWidth >
                                    <Text>
                                {about.intro.sublineOne}

                                    </Text>
                            </Flex>
                            <Flex
                                direction="column"
                                textVariant="label-default-l"
                                fillWidth >
                                    <Text>

                                {about.intro.sublineTwo}
                                    </Text>
                            </Flex>
                            <Flex
                                direction="column"
                                textVariant="label-default-l"
                                fillWidth marginBottom="xl">
                                    <Text>

                                {about.intro.sublineThree}
                                    </Text>
                            </Flex>
                        </Flex>
                    )}

                    { about.work.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.work.title}
                                variant="display-strong-s"
                                marginBottom="m">
                                {about.work.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="s" marginBottom="40">
                                {about.work.experiences.map((experience, index) => (
                                    <Flex
                                        key={`${experience.company}-${experience.role}-${index}`}
                                        fillWidth
                                        direction="column">
                                        <Flex
                                            fillWidth
                                            justifyContent="space-between"
                                            alignItems="flex-end"
                                            marginBottom="4">
                                            <Text
                                                id={experience.company}
                                                variant="heading-strong-l">
                                                {experience.company}
                                            </Text>
                                            <Text
                                                variant="heading-default-xs"
                                                onBackground="neutral-weak">
                                                {experience.timeframe.start}
                                            </Text>
                                        </Flex>
                                        <Text
                                            variant="body-default-s"
                                            onBackground="brand-weak"
                                            marginBottom="m">
                                            {experience.role}
                                        </Text>
                                        <Flex
                                            as="ul"
                                            direction="column" gap="xs">
                                            {experience.achievements.map((achievement, index) => (
                                                <Text
                                                    as="li"
                                                    variant="body-default-m"
                                                    key={`${experience.company}-${index}`}>
                                                    {achievement}
                                                </Text>
                                            ))}
                                        </Flex>
                                       
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                    { about.studies.display && (
                        <>  
                            <Heading
                                as="h2"
                                id={about.studies.title}
                                variant="display-strong-s"
                                marginBottom="m">
                                {about.studies.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="s" marginBottom="40">
                                {about.studies.institutions.map((institution, index) => (
                                    <Flex
                                    key={`${institution.name}-${index}`}
                                    fillWidth gap="8"
                                    direction="row" >
                                        <Flex paddingX='xs'>
                                            <Avatar
                                                size="l"
                                                src={institution.image.src}
                                            />
                                        </Flex>
                                        <Flex direction='column'>

                                            <Text
                                                id={institution.name}
                                                variant="heading-strong-l">
                                                {institution.name}
                                            </Text>
                                            <Text
                                                variant="heading-default-xs"
                                                onBackground="neutral-weak">
                                                {institution.description}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}

                    { about.project.display && (
                        <>
                            <Heading
                                as="h2"
                                id={about.technical.title}
                                variant="display-strong-s" marginBottom="40">
                                {about.technical.title}
                            </Heading>
                            <Flex
                                direction="column"
                                fillWidth gap="l">
                                {about.project.mainProjects.map((mainProject, index) => (
                                    <Flex
                                        key={`${mainProject}-${index}`}
                                        fillWidth gap="4"
                                        direction="column">
                                        <Text
                                            variant="heading-strong-l">
                                            {mainProject.name}
                                        </Text>
                                        <Text
                                            variant="body-default-m"
                                            onBackground="neutral-weak">
                                            {mainProject.description}
                                        </Text>
                                        {mainProject.image  && (
                                            <Flex
                                                fillWidth paddingTop="m" gap="12"
                                                wrap>
                                                {/* {skill.images.map((image, index) => ( */}
                                                    <Flex
                                                        key={index}
                                                        border="neutral-medium"
                                                        borderStyle="solid-1"
                                                        radius="m"
                                                        minWidth={mainProject.image.width} height={mainProject.image.height}>
                                                        <SmartImage
                                                            enlarge
                                                            radius="m"
                                                            sizes={mainProject.image.toString()}
                                                            alt={mainProject.image.alt}
                                                            src={mainProject.image.src}/>
                                                    </Flex>
                                                {/* ))} */}
                                            </Flex>
                                        )}
                                    </Flex>
                                ))}
                            </Flex>
                        </>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
}