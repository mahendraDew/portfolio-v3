"use client"
import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components"
import { person, social } from '@/app/resources'
import { useEffect, useState } from "react";
import { routes, display } from '@/app/resources'



type TimeDisplayProps = {
    timeZone: string;
    locale?: string;  // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'en-GB' }) => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            };
            const timeString = new Intl.DateTimeFormat(locale, options).format(now);
            setCurrentTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, [timeZone, locale]);

    return (
        <>
            {currentTime}
        </>
    );
};
export default TimeDisplay;


export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Flex
            as="footer"
            position="relative"
            fillWidth padding="8"
            justifyContent="center"
            width="s">
            <Flex
                fillWidth maxWidth="s" paddingY="8" paddingX="16"
                justifyContent="space-between" alignItems="center">
                     {/* <Flex
                hide="s"
                paddingRight="12" fillWidth
                justifyContent="flex-end" alignItems="center"
                textVariant="body-default-s">
                { display.time && (
                    <TimeDisplay timeZone={person.location}/>
                )}
            </Flex> */}
                 <Text
                    variant="body-default-s"
                    onBackground="neutral-strong">
                    
                    <Text paddingX="4">
                        { display.time && (
                        <TimeDisplay timeZone={person.timeZone}/>
                        )}
                    </Text>
                   
                </Text>
                <Text
                    variant="body-default-s"
                    onBackground="neutral-strong">
                    <Text
                        onBackground="neutral-weak">
                        © {currentYear} /
                    </Text>
                    <Text paddingX="4">
                        <a href="https://twitter.com/mahendradew">
                         {person.name}
                        </a>
                    </Text>
                   
                </Text>
               
                <Flex
                    gap="16">
                    {social.map((item) => (
                        item.link && (
                            <IconButton
                                key={item.name}
                                href={item.link}
                                icon={item.icon}
                                tooltip={item.name}
                                size="s"
                                variant="ghost"/>
                        )
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}