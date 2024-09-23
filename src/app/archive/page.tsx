
import React from 'react';
import { ArchiveProject } from './components/ArchiveProject';
import { Flex, Heading } from '@/once-ui/components';


export default function Archive() {
  
  return (
    <> 
      <Flex width="s" direction='column' justifyContent='center' alignItems='center'>
        <Heading
            as='h2'
            id="needs to  be changed"
            variant='display-strong-s'
            marginBottom='m'
          >
            {/* {about.work.title} */}
            Archive Page (needs to be changed)
          </Heading>
        <ArchiveProject />
      </Flex>
    </>
  );
};