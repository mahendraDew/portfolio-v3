"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Flex, ToggleButton } from "@/once-ui/components"
import styles from '@/app/components/Header.module.scss'

import { routes, display } from '@/app/resources'
import { person, home, about, blog } from '@/app/resources'

import React from 'react';
import localFont from 'next/font/local';


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
                hour12: false,
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

const robotoThin = localFont({
    src: '../../../public/fonts/Roboto-Light.woff2',  // Use .ttf format from the existing font directory
    variable: '--font-roboto-thin',
    weight: '100',
  });



export const Header = () => {
    const pathname = usePathname() ?? '';

    return (
        <>
      <style>
        {`
          .logo-svg:hover {
            cursor: pointer;
          }
        `}
      </style>
        <Flex style={{height: 'fit-content'}}
            className={styles.position}
            as="header"
            zIndex={9}
            fillWidth padding="8"
            justifyContent="center" >
            {/* <Flex
                hide="s"
                paddingLeft="12" fillWidth
                alignItems="center"
                textVariant="body-default-s">
                { display.location && (
                    <>{person.location}</>
                )}
            </Flex> */}
            <Flex
                background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                padding="4"
                justifyContent="space-between" 
                width="m">

                    <a href="/">
                <Flex marginLeft="8"
                width="40" style={{cursor: 'pointer'}}
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    className={`w-1 h-1 sm:w-10  sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 ${robotoThin.variable} logo-svg`} // Apply Roboto Thin only here
                    role="img"
                    aria-label="Logo M"
                    style={{ cursor: 'pointer' }}
                    >
                   
                    <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontFamily="var(--font-roboto-thin)" 
                        fontSize="100"
                        fill="white"
                        fontWeight="100"
                    >
                        MD
                    </text>
                    </svg>

                </Flex>
                </a>
                <Flex
                    gap="4"
                    textVariant="body-default-s">
                    { routes['/'] && (
                        <ToggleButton
                            prefixIcon="home"
                            href="/"
                            selected={pathname === "/"}>
                            <Flex paddingX="2" hide="s">{home.label}</Flex>
                        </ToggleButton>
                    )}
                    { routes['/about'] && (
                        <ToggleButton
                            prefixIcon="person"
                            href="/about"
                            selected={pathname === "/about"}>
                            <Flex paddingX="2" hide="s">{about.label}</Flex>
                        </ToggleButton>
                    )}
                    {/* { routes['/work'] && (
                        <ToggleButton
                            prefixIcon="grid"
                            href="/work"
                            selected={pathname.startsWith('/work')}>
                            <Flex paddingX="2" hide="s">{work.label}</Flex>
                        </ToggleButton>
                    )} */}
                    { routes['/blog'] && (
                        <ToggleButton
                            prefixIcon="book"
                            href="https://hashnode.com/@mahendraDew"
                            selected={pathname.startsWith('/blog')}>
                            <Flex paddingX="2" hide="s">{blog.label}</Flex>
                        </ToggleButton>
                    )}
                  
                </Flex>
            </Flex>
            {/* <Flex
                hide="s"
                paddingRight="12" fillWidth
                justifyContent="flex-end" alignItems="center"
                textVariant="body-default-s">
                { display.time && (
                    <TimeDisplay timeZone={person.location}/>
                )}
            </Flex> */}
        </Flex>
        </>
    )
}