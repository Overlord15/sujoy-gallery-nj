import Head from 'next/head'
// import { Link as Nextlink } from 'next/link'
import Nextlink from 'next/link'
import { Button, Text, Center, Box, Container, Flex, Heading, IconButton, Link, Spacer, useMediaQuery, Menu, MenuButton, MenuList, MenuItem, useColorModeValue, Image } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { FaPaw, FaSun, FaMoon, FaInfoCircle, FaTelegramPlane, FaCannabis, FaGithub, FaGripLines, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
// import p1 from "../comp/p1"
import { FcGallery, FcAbout, FcComments, FcCamcorderPro, FcOldTimeCamera } from 'react-icons/fc'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
  const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
  return (
    <>
      <Head>
        <title>SUJOY | HOMEPAGE</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Box as="nav" position="fixed" zIndex={1} backdropFilter="auto" backdropBlur="8px" w="100%">
        <Flex w="100%" pl="7" pr="7" pb="3">
          <Nextlink href="/" passHref scroll={false}>
            <Link mt="4" cursor="pointer" fontSize="18.5" fontWeight="extrabold" textDecoration="none" href='/' _hover={{ textDecoration: "none" }}>
              SUJOY&apos;S &nbsp;GALLERY
            </Link>
          </Nextlink>
          <div>
            {isLargerThan650 &&
              <p>
                <Flex>
                  <Box pt="21.5px" ml="10" mr="1"><FcGallery /></Box>
                  <Nextlink href="../gallery/page-1" passHref scroll={false}>
                    <Link mt="4" size="sm" fontSize="lg" ml="1" _hover={{ color: "red.500", textDecoration: "underline", }}>Gallery</Link>
                  </Nextlink>
                  <Box pt="21.5px" ml="6" mr="1"><FcCamcorderPro /></Box>
                  <Link href='' isExternal mt="4" size="sm" fontSize="lg" ml="1" _hover={{ color: "grey.500", textDecoration: "underline", }}>Commissions</Link>
                </Flex>
              </p>
            }
          </div>
          <Spacer></Spacer>
          <IconButton ml="4" mt="3" size="sm" icon={isDark ? <FaMoon /> : <FaSun />} bg={isDark ? "teal.300" : "yellow.300"} onClick={toggleColorMode}></IconButton>
          <div>
            {isLargerThan6502 &&
              <p>
                <Menu>
                  <MenuButton as={IconButton} icon={<FaGripLines />} size="sm" mt="3" ml="2" bg={isDark ? "blue.400" : "purple.300"}>
                  </MenuButton>
                  <MenuList>
                    <MenuItem><Flex alignItems="center"><FcGallery /><Nextlink href="../gallery/page-1" passHref scroll={false}><Link ml="2" justifyContent="center" href="/" alignItems="center" textDecoration="none">Gallery</Link></Nextlink></Flex></MenuItem>
                    <MenuItem><Flex alignItems="center"><FcCamcorderPro /><Link ml="2" justifyContent="center" href="" textDecoration="none">Commisions</Link></Flex></MenuItem>
                  </MenuList>
                </Menu>
              </p>}
          </div>
        </Flex>
      </Box>
      <Container pt="100">
        <Box border="lg" mb="6" p="3" textAlign="center" borderRadius="8px" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.300')} css={{ backdropFilter: 'blur(10px)' }}>
          Hello, I&apos;m an indie Photographer and Editor based in India!
        </Box>
        <div>
          {isLargerThan650 &&
            <p>
              <Flex>
                <Box pl="2">
                  <Heading>
                    Sujoy Kumar Ghosh
                  </Heading>
                  <p>Digital Craftsman ( Photographer / Editor )</p>
                </Box>
                <Image borderRadius='full' boxSize='100px' src='sujoy.jpeg' alt='Sujoy Kumar Ghosh' ml="6" />
              </Flex>
            </p>
          }
        </div>
        <div>
          {isLargerThan6502 &&
            <p>
              <Box pl="2">
                <Heading>
                  Sujoy Kumar Ghosh
                </Heading>
                <p>Digital Craftsman ( Artist / Developer / Designer )</p>
              </Box>
              <Center mt="6">
                <Image borderRadius='full' boxSize='150px' src='sujoy.jpeg' objectFit="cover" alt='Anupam Kumar' />
              </Center>
            </p>
          }
        </div>

        <Flex mt="6">
          <Text pl="2" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
            Work
          </Text>
        </Flex>
        <Text pl="2" mt="3" textAlign="justify">
          Sujoy is a freelance Photographer and Editor based in Salboni with a passion for clicking 1 in a million shots. He has a knack for editing photos.
        </Text>
        <Center>
          <Button mt="7" bg={isDark ? "teal.300" : "purple.300"} color={isDark ? "black" : "white"} >
            <Link textAlign="center" textDecoration="none" _hover={{ textDecoration: "none", }}>My Portfolio</Link>
          </Button>
        </Center>
        <Flex mt="5">
          <Text pl="2" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
            Bio
          </Text>
        </Flex>
        <Box ml="2" pb="30" mt="3">
          <BioSection>
            <BioYear>2003</BioYear>
            Born in Salboni ( ?????????????????? ), India.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed the Higher Secondery&apos;s Program in the  School of
            Salboni ( ?????????????????? ).
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Started pursuing BCA from Midnapore College Autonomus ( ??????????????????????????? ???????????? - ???????????????????????? ).
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Studying and working as freelance ....
          </BioSection>
        </Box>
        <Flex>
          <Text pl="2" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
            I &#129505;
          </Text>
        </Flex>
        <Text pl="2" mt="3">
          &nbsp;&nbsp;&nbsp;Art, Music, Drawing, Playing RPG Games,{' '}<Link textDecoration="none" color="pink.300" _hover={{ textDecoration: "underline", color: "pink.300", textUnderlineOffset: 3 }}>Photography</Link>,  Learning Javascript framework, Machine.
        </Text>
        <Flex mt="6" mb="1">
          <Text pl="2" css={{ fontFamily: "heading", fontSize: 20, fontWeight: "bold", lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
            On the web
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="baseline">
          <Button variant="ghost" color="teal.300" ><FaGithub /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://github.com/sujoy2003' isExternal>@sujoy2003</Link></Button>
          {/* <Button variant="ghost" color="teal.300" ><FaTwitter /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://twitter.com/AnupamKhamrai' isExternal>@AnupamKhamrai</Link></Button> */}
          <Button variant="ghost" color="teal.300" ><FaFacebook /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://www.facebook.com/sujoy.ghosh.31521301' isExternal>@sujoy.ghosh.31521301</Link></Button>
          <Button variant="ghost" color="teal.300" ><FaInstagram /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://www.instagram.com/sujoy_ghosh001/' isExternal>@sujoy_ghosh001</Link></Button>
        </Flex>


        <Box maxW="100%" h="30px" pb="10" pt="8" ><Text textAlign="center" fontSize="15px" fontWeight="light">?? 2022 Sujoy Kumar Ghosh. All Rights Reserved.</Text></Box>
      </Container>
    </>
  )
}
