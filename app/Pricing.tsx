import React from 'react'
import {Box,Heading,Text,Flex,Button,HStack,Icon} from '@chakra-ui/react'
import checkmarkicon from './icons/checkmarkicon'


export default function Pricing() {
  return (
       <Box maxW={'1000px'}  mx={{base:"12px",md:"12px", lg:'auto'}} mt={'-170px'} bg='white' borderRadius='12px' overflow={'hidden'} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}>
        <Flex direction={{base:'column', md:'column',lg:'row' }}>
           <Box bg={'#e8d3ff'} p='60px' textAlign={'center'}>
             <Text fontSize={'24px'} fontWeight={"bold"}>Premium PRO</Text>
             <Heading fontSize={'60px'}>$329</Heading>
             <Text>Billed just once</Text>
             <Button bg={'#805AD5'} color="white" mt={'25px'} minW='200px'>Get Started</Button>
           </Box>

           <Box pt={'50px'}  pl="25px" >
               <Text mb={'15px'}>Access these features when you get this pricing package for your business</Text>

               <HStack pt={'px'}>
                <Icon as= {checkmarkicon}/>
                <Text>Internaational calling and messaging API</Text>
               </HStack>

               <HStack pt={'15px'}>
                <Icon as= {checkmarkicon}/>
                <Text>Additional phone numbers</Text>
               </HStack>

               <HStack pt={'15px'}>
                <Icon as= {checkmarkicon}/>
                <Text>Automated messages via Zapier</Text>
               </HStack>

               <HStack pt={'15px'} pb='15px'>
                <Icon as= {checkmarkicon}/>
                <Text>24/7 support and consulting</Text>
               </HStack>

           </Box>
        </Flex>
        
       </Box>
      

    )
}
