
import React from 'react';
import { ArchiveProject } from './components/ArchiveProject';
import { Flex, Heading, IconButton } from '@/once-ui/components';


export default function Archive() {
  
  return (
    <> 
      <Flex width="s" direction='column' justifyContent='center' alignItems='center'>
        <Flex fillWidth alignItems='center'   marginBottom='m' paddingX='s'>
          <Flex flex={1}  alignItems='center'>
            <IconButton
              href='/'
              icon="chevronLeft"
              size="l"
              tooltip="home"
              tooltipPosition="bottom"
              variant="tertiary"
              />
          </Flex>
          <Flex flex={3}>
            <Heading
                as='h2'
                id="needs to  be changed"
                variant='display-strong-s'
                
               
                >
                {/* {about.work.title} */}
              archive projects
            </Heading>
          </Flex>
        </Flex>

        <ArchiveProject />
      </Flex>
    </>
  );
};