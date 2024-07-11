import { Box, Flex } from '@chakra-ui/react';
import cls from './SecondaryHeader.module.scss';

export default function SecondaryHeader() {
  return(
    <div className={cls.secondaryHeader}>
      <Flex className={cls.container} px={15} py={10} justifyContent='space-between' >
        <div className={cls.left}>
          <div className={cls.phoneNumber}>

          </div>
        </div>
        <div className={cls.right}>

        </div>
      </Flex>
    </div>
  )
}