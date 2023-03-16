import React from 'react'
import {Box,Heading,Text} from '@chakra-ui/react'


export default function Header() {
  return (
<Box textAlign={{base:'left', md:'left', lg:'center'}} bg="#6B46C1" pt={'90px'} color="white" pb="260px" px={'15px'} >
    <Heading pb="18px" >Simple pricing for your business</Heading>
    <Text>Plans that are carefully crafted to suit your business</Text>
</Box>
    )
}
