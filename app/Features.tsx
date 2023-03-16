import React from 'react'
import {Box,Heading,Text,Flex,Button,HStack,Icon} from '@chakra-ui/react'
import icon1 from './icons/icon1'
import icon2 from './icons/icon2'
import icon3 from './icons/icon3'



export default function Features() {
  return (
    <Box maxW={'800px'}  m='auto' mt={'40px'} px='15px'>
        <Flex direction={{base:"column", md:'column', lg:'row'}}>

        <HStack mb={'15px'}>
            <Icon as={icon1}/>
            <Text fontWeight={'bold'}>30 days money back Guarantee</Text>
        </HStack >
        <HStack mb={'15px'}>
            <Icon as={icon2}/>
            <Text fontWeight={'bold'}>No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack mb={'15px'}>
            <Icon as={icon3}/>
            <Text fontWeight={'bold'}>No monthly subscription Pay once and for all</Text>
        </HStack>

        </Flex>
    </Box>
  )
}
