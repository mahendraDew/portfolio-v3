
import React from 'react';
import { ArchiveProject } from './components/ArchiveProject';
import { Flex, Heading, IconButton } from '@/once-ui/components';


export default function Archive() {
  
  return (
    <> 
      <Flex width="s" direction='column' justifyContent='center' alignItems='center'>
        {/* <IconButton
          href="/"
          icon="HiMiniArrowLeft"
          size="l"
          tooltip="Tooltip"
          tooltipPosition="top"
          variant="tertiary"
        /> */}
        <Heading
            as='h2'
            id="needs to  be changed"
            variant='display-strong-s'
            marginBottom='m'
          >
            {/* {about.work.title} */}
            archive projects
          </Heading>
        <ArchiveProject />
      </Flex>
    </>
  );
};