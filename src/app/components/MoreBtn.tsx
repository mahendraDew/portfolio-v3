import { Flex } from '@/once-ui/components'

import { More } from './More'

export function MoreBtn () {
  return (
    <Flex fillWidth direction='column'>
      <More href={`/about`} />
    </Flex>
  )
}
