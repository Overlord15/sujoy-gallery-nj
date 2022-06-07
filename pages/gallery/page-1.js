import Head from 'next/head'
import { AspectRatio } from '@chakra-ui/react'
// import { Link as Nextlink } from 'next/link'
import Nextlink from 'next/link'
import { Button, Text, Center, Box, Container, Flex, Heading, IconButton, Link, Spacer, useMediaQuery, Menu, MenuButton, MenuList, MenuItem, useColorModeValue, Image } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { FaPaw, FaSun, FaMoon, FaInfoCircle, FaTelegramPlane, FaCannabis, FaGithub, FaGripLines, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FcGallery, FcAbout, FcComments, FcCamcorderPro, FcOldTimeCamera, FcDownload } from 'react-icons/fc'
import { BsFillCloudDownloadFill } from 'react-icons/bs'
import styled from '@emotion/styled'




export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
    return (
        <>
            <Head>
                <title>GALLERY | PAGE 1</title>
                <link rel="apple-touch-icon" sizes="180x180" href="https://cdn-icons.flaticon.com/png/512/1135/premium/1135729.png?token=exp=1653665482~hmac=53bdc80273655cb686732d46e1786a52" />
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
                                    <Box pt="21.5px" ml="6" mr="2"><FcComments /></Box>
                                    <Link href='/' mt="4" size="sm" fontSize="lg" ml="0" _hover={{ color: "green.500", textDecoration: "underline", }}>Post</Link>
                                    <Box pt="21.5px" ml="6" mr="1"><FcCamcorderPro /></Box>
                                    <Link href='' isExternal mt="4" size="sm" fontSize="lg" ml="1" _hover={{ color: "grey.500", textDecoration: "underline", }}>Commissions</Link>
                                    <Box pt="21.5px" ml="6" mr="1"><FcAbout /></Box>
                                    <Link href='' isExternal mt="4" size="sm" fontSize="lg" ml="1" _hover={{ color: "blue.400", textDecoration: "underline", }}>About</Link>
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
                                        <MenuItem><Flex alignItems="center"><FcGallery /><Nextlink href="../comp/work" passHref scroll={false}><Link ml="2" justifyContent="center" href="/" alignItems="center" textDecoration="none">Gallery</Link></Nextlink></Flex></MenuItem>
                                        <MenuItem><Flex alignItems="center"><FcAbout /><Link ml="2" justifyContent="center" href="/" alignItems="center" textDecoration="none">About Me</Link></Flex></MenuItem>
                                        <MenuItem><Flex alignItems="center"><FcComments /><Link ml="2" href="/" alignItems="center" textDecoration="none">Post Section</Link></Flex></MenuItem>
                                        <MenuItem><Flex alignItems="center"><FcCamcorderPro /><Link ml="2" justifyContent="center" href="" textDecoration="none">Commisions</Link></Flex></MenuItem>
                                    </MenuList>
                                </Menu>
                            </p>}
                    </div>
                </Flex>
            </Box>
            <Box pt="100" m="auto">

                <Container maxW="container.md">

                    <Box>
                        <Image alt='image' objectFit="cover" loading='eager' height={isLargerThan650 ? "480px" : "auto"} width={isLargerThan650 ? "750px" : "auto"} borderRadius="10px" src="/photos/1.jpg" mb="2"></Image>
                        <Text p="5px" mr="5px" textAlign='center'>#Kolkata #Bus #Sky #Building</Text>
                        <Flex mb="10">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio-192cf.web.app/photos/1.jpg" target="_blank" rel="noopener noreferrer"><Text color="black" mt="9px" mb="40px" bgColor="blue.400" pt="8px" pb="8px" pl="9px" pr="9px" mr="8px" borderRadius="4px"><Flex> <FaFacebook size="25"/>&nbsp; SHARE ON FACEBOOK</Flex></Text></a>
                            <Spacer></Spacer>
                            <a href="/photos/1.jpg" download ><Text color="black" mt="9px" mb="40px" bgColor="green.300" pt="8px" pb="8px" pl="9px" pr="9px" borderRadius="4px"><Flex><BsFillCloudDownloadFill size="25"/>&nbsp;&nbsp;DOWNLOAD</Flex></Text></a>
                        </Flex>
                    </Box>
                    <Box>
                        <Image alt='image' objectFit="cover" loading='eager' height={isLargerThan650 ? "480px" : "auto"} width={isLargerThan650 ? "750px" : "auto"} borderRadius="10px" src="/photos/2.jpg" mb="2"></Image>
                            <Text p="5px" mr="5px" textAlign='center'>#Kolkata #Street #Rikshaw</Text>
                        <Flex mb="10">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio-192cf.web.app/photos/2.jpg" target="_blank" rel="noopener noreferrer"><Text color="black" mt="9px" mb="40px" bgColor="blue.400" pt="8px" pb="8px" pl="9px" pr="9px" mr="8px" borderRadius="4px"><Flex> <FaFacebook size="25"/>&nbsp; SHARE ON FACEBOOK</Flex></Text></a>
                            <Spacer></Spacer>
                            <a href="/photos/2.jpg" download ><Text color="black" mt="9px" mb="40px" bgColor="green.300" pt="8px" pb="8px" pl="9px" pr="9px" borderRadius="4px"><Flex><BsFillCloudDownloadFill size="25"/>&nbsp;&nbsp;DOWNLOAD</Flex></Text></a>
                        </Flex>
                    </Box>
                    <Box>
                        <Image alt='image' objectFit="cover" loading='eager' height={isLargerThan650 ? "480px" : "auto"} width={isLargerThan650 ? "750px" : "auto"} borderRadius="10px" src="/photos/3.jpg" mb="2"></Image>
                            <Text p="5px" mr="5px" textAlign='center'>#Kolkata #Street #Building #Sky</Text>
                        <Flex mb="10">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio-192cf.web.app/photos/3.jpg" target="_blank" rel="noopener noreferrer"><Text color="black" mt="9px" mb="40px" bgColor="blue.400" pt="8px" pb="8px" pl="9px" pr="9px" mr="8px" borderRadius="4px"><Flex> <FaFacebook size="25"/>&nbsp; SHARE ON FACEBOOK</Flex></Text></a>
                            <Spacer></Spacer>
                            <a href="/photos/3.jpg" download ><Text color="black" mt="9px" mb="40px" bgColor="green.300" pt="8px" pb="8px" pl="9px" pr="9px" borderRadius="4px"><Flex><BsFillCloudDownloadFill size="25"/>&nbsp;&nbsp;DOWNLOAD</Flex></Text></a>
                        </Flex>
                    </Box>
                    <Box>
                        <Image alt='image' objectFit="cover" loading='eager' height={isLargerThan650 ? "480px" : "auto"} width={isLargerThan650 ? "750px" : "auto"} borderRadius="10px" src="/photos/4.jpg" mb="2"></Image>
                            <Text p="5px" mr="5px" textAlign='center'>#Kolkata #Street #Taxi</Text>
                        <Flex mb="10">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio-192cf.web.app/photos/4.jpg" target="_blank" rel="noopener noreferrer"><Text color="black" mt="9px" mb="40px" bgColor="blue.400" pt="8px" pb="8px" pl="9px" pr="9px" mr="8px" borderRadius="4px"><Flex> <FaFacebook size="25"/>&nbsp; SHARE ON FACEBOOK</Flex></Text></a>
                            <Spacer></Spacer>
                            <a href="/photos/4.jpg" download ><Text color="black" mt="9px" mb="40px" bgColor="green.300" pt="8px" pb="8px" pl="9px" pr="9px" borderRadius="4px"><Flex><BsFillCloudDownloadFill size="25"/>&nbsp;&nbsp;DOWNLOAD</Flex></Text></a>
                        </Flex>
                    </Box>
                    <Box>
                        <Image alt='image' objectFit="cover" loading='eager' height={isLargerThan650 ? "480px" : "auto"} width={isLargerThan650 ? "750px" : "auto"} borderRadius="10px" src="/photos/5.jpg" mb="2"></Image>
                            <Text p="5px" mr="5px" textAlign='center'>#Kolkata #Street #Traffic #Evening #Sky</Text>
                        <Flex mb="10">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio-192cf.web.app/photos/5.jpg" target="_blank" rel="noopener noreferrer"><Text color="black" mt="9px" mb="40px" bgColor="blue.400" pt="8px" pb="8px" pl="9px" pr="9px" mr="8px" borderRadius="4px"><Flex> <FaFacebook size="25"/>&nbsp; SHARE ON FACEBOOK</Flex></Text></a>
                            <Spacer></Spacer>
                            <a href="/photos/5.jpg" download ><Text color="black" mt="9px" mb="40px" bgColor="green.300" pt="8px" pb="8px" pl="9px" pr="9px" borderRadius="4px"><Flex><BsFillCloudDownloadFill size="25"/>&nbsp;&nbsp;DOWNLOAD</Flex></Text></a>
                        </Flex>
                    </Box>
                    <Box>
                        <Image alt='image' objectFit="cover" loading='eager' height={isLargerThan650 ? "480px" : "auto"} width={isLargerThan650 ? "750px" : "auto"} borderRadius="10px" src="/photos/6.jpg" mb="2"></Image>
                            <Text p="5px" mr="5px" textAlign='center'>#Kolkata #Street #Traffic #Bus #Sky</Text>
                        <Flex mb="10">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio-192cf.web.app/photos/6.jpg" target="_blank" rel="noopener noreferrer"><Text color="black" mt="9px" mb="40px" bgColor="blue.400" pt="8px" pb="8px" pl="9px" pr="9px" mr="8px" borderRadius="4px"><Flex> <FaFacebook size="25"/>&nbsp; SHARE ON FACEBOOK</Flex></Text></a>
                            <Spacer></Spacer>
                            <a href="/photos/6.jpg" download ><Text color="black" mt="9px" mb="40px" bgColor="green.300" pt="8px" pb="8px" pl="9px" pr="9px" borderRadius="4px"><Flex><BsFillCloudDownloadFill size="25"/>&nbsp;&nbsp;DOWNLOAD</Flex></Text></a>
                        </Flex>
                    </Box>
                    <Box>
                        <Image alt='image' objectFit="cover" loading='eager' height={isLargerThan650 ? "480px" : "auto"} width={isLargerThan650 ? "750px" : "auto"} borderRadius="10px" src="/photos/7.jpg" mb="2"></Image>
                            <Text p="5px" mr="5px" textAlign='center'>#Kolkata #RabindraSetu #Launch #GangesRiver #Sky</Text>
                        <Flex mb="10">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio-192cf.web.app/photos/7.jpg" target="_blank" rel="noopener noreferrer"><Text color="black" mt="9px" mb="40px" bgColor="blue.400" pt="8px" pb="8px" pl="9px" pr="9px" mr="8px" borderRadius="4px"><Flex> <FaFacebook size="25"/>&nbsp; SHARE ON FACEBOOK</Flex></Text></a>
                            <Spacer></Spacer>
                            <a href="/photos/7.jpg" download ><Text color="black" mt="9px" mb="40px" bgColor="green.300" pt="8px" pb="8px" pl="9px" pr="9px" borderRadius="4px"><Flex><BsFillCloudDownloadFill size="25"/>&nbsp;&nbsp;DOWNLOAD</Flex></Text></a>
                        </Flex>
                    </Box>
                    <Box>
                        <Image alt='image' objectFit="cover" loading='eager' height={isLargerThan650 ? "480px" : "auto"} width={isLargerThan650 ? "750px" : "auto"} borderRadius="10px" src="/photos/8.jpg" mb="2"></Image>
                            <Text p="5px" mr="5px" textAlign='center'>#Kolkata #Street #Bus #Building</Text>
                        <Flex mb="10">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio-192cf.web.app/photos/8.jpg" target="_blank" rel="noopener noreferrer"><Text color="black" mt="9px" mb="40px" bgColor="blue.400" pt="8px" pb="8px" pl="9px" pr="9px" mr="8px" borderRadius="4px"><Flex> <FaFacebook size="25"/>&nbsp; SHARE ON FACEBOOK</Flex></Text></a>
                            <Spacer></Spacer>
                            <a href="/photos/8.jpg" download ><Text color="black" mt="9px" mb="40px" bgColor="green.300" pt="8px" pb="8px" pl="9px" pr="9px" borderRadius="4px"><Flex><BsFillCloudDownloadFill size="25"/>&nbsp;&nbsp;DOWNLOAD</Flex></Text></a>
                        </Flex>
                    </Box>
                    <Box>
                        <Image alt='image' objectFit="cover" loading='eager' height={isLargerThan650 ? "480px" : "auto"} width={isLargerThan650 ? "750px" : "auto"} borderRadius="10px" src="/photos/9.jpeg" mb="2"></Image>
                            <Text p="5px" mr="5px" textAlign='center'>#Kolkata #Bridge #Sunset #GangesRiver</Text>
                        <Flex mb="10">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio-192cf.web.app/photos/9.jpeg" target="_blank" rel="noopener noreferrer"><Text color="black" mt="9px" mb="40px" bgColor="blue.400" pt="8px" pb="8px" pl="9px" pr="9px" mr="8px" borderRadius="4px"><Flex> <FaFacebook size="25"/>&nbsp; SHARE ON FACEBOOK</Flex></Text></a>
                            <Spacer></Spacer>
                            <a href="/photos/9.jpeg" download ><Text color="black" mt="9px" mb="40px" bgColor="green.300" pt="8px" pb="8px" pl="9px" pr="9px" borderRadius="4px"><Flex><BsFillCloudDownloadFill size="25"/>&nbsp;&nbsp;DOWNLOAD</Flex></Text></a>
                        </Flex>
                    </Box>
                    <Box>
                        <Image alt='image' objectFit="cover" loading='eager' height={isLargerThan650 ? "480px" : "auto"} width={isLargerThan650 ? "750px" : "auto"} borderRadius="10px" src="/photos/11.jpg" mb="2"></Image>
                            <Text p="5px" mr="5px" textAlign='center'>#Kolkata #River #Boat #Sky #Rower</Text>
                        <Flex mb="10">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio-192cf.web.app/photos/11.jpg" target="_blank" rel="noopener noreferrer"><Text color="black" mt="9px" mb="40px" bgColor="blue.400" pt="8px" pb="8px" pl="9px" pr="9px" mr="8px" borderRadius="4px"><Flex> <FaFacebook size="25"/>&nbsp; SHARE ON FACEBOOK</Flex></Text></a>
                            <Spacer></Spacer>
                            <a href="/photos/11.jpg" download ><Text color="black" mt="9px" mb="40px" bgColor="green.300" pt="8px" pb="8px" pl="9px" pr="9px" borderRadius="4px"><Flex><BsFillCloudDownloadFill size="25"/>&nbsp;&nbsp;DOWNLOAD</Flex></Text></a>
                        </Flex>
                    </Box>
                    <Box>
                        <Image alt='image' objectFit="cover" loading='eager' height={isLargerThan650 ? "480px" : "280px"} width={isLargerThan650 ? "750px" : "750px"} borderRadius="10px" src="/photos/12.jpg" mb="2"></Image>
                            <Text p="5px" mr="5px" textAlign='center'>#Kolkata #River #Boat #Sky #Rower</Text>
                        <Flex mb="10">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://portfolio-192cf.web.app/photos/12.jpg" target="_blank" rel="noopener noreferrer"><Text color="black" mt="9px" mb="40px" bgColor="blue.400" pt="8px" pb="8px" pl="9px" pr="9px" mr="8px" borderRadius="4px"><Flex> <FaFacebook size="25"/>&nbsp; SHARE ON FACEBOOK</Flex></Text></a>
                            <Spacer></Spacer>
                            <a href="/photos/12.jpg" download ><Text color="black" mt="9px" mb="40px" bgColor="green.300" pt="8px" pb="8px" pl="9px" pr="9px" borderRadius="4px"><Flex><BsFillCloudDownloadFill size="25"/>&nbsp;&nbsp;DOWNLOAD</Flex></Text></a>
                        </Flex>
                    </Box>


                    <Flex>
                        {/* <Nextlink href="../gallery/page-1" passHref scroll={false}>
                            <Link bgColor="grey.300" border="2px" borderColor="teal.300" borderRadius="5px" p="3" _hover={{textDecoration: "none"}} href='../gallery/page-1' cursor="no-drop">Prev Page</Link>
                        </Nextlink> */}
                        <Spacer></Spacer>
                        <Nextlink href="./404" passHref scroll={false}>
                            <Link bgColor="teal.300" p="3" href='./404' border="2px" borderRadius="5px" borderColor="teal.300" _hover={{ textDecoration: "none" }}>Next Page</Link>
                        </Nextlink>

                    </Flex>




                </Container>



                <Box maxW="100%" h="30px" pb="10" pt="20" borderRadius="10px" ><Text textAlign="center" fontSize="15px" fontWeight="light">© 2022 Sujoy Kumar Ghosh. All Rights Reserved.</Text></Box>
            </Box>
        </>
    )
}