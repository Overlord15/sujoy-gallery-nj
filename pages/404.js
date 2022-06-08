import { Container, chakra, Progress } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import Head from 'next/head'
const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and the children prop to be forwarded.
     * All other chakra props not matching the motion props will still be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

export default function App() {
    return (
        <>
            <Head>
                <title>SUJOY | HOMEPAGE</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <Progress size='xs' isIndeterminate />
            <Progress size='xs' isIndeterminate />
            <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
                <ChakraBox
                    textAlign="center"
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    // @ts-ignore no problem in operation, although type error appears.
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    padding="2"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100px"
                    height="100px"
                >
                    Coming Soon !
                </ChakraBox>
            </Container>

        </>
    )
}