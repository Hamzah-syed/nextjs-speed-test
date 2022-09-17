import React, { FC } from 'react'
// Icons
import { SocialIcon } from "react-social-icons"

// Framer motion
import { LazyMotion, m } from "framer-motion"

interface IProps {

}
// Make sure to return the specific export containing the feature bundle.
const loadFeatures = () =>
    import("../utils/features").then(res => res.default)

const Header: FC<IProps> = () => (

    <header className='max-w-7xl mx-auto sticky top-0 flex items-start justify-between'>
        <LazyMotion features={loadFeatures}>

            <m.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 1
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 0.5
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex items-center gap-x-2'>
                {/* Social Icons */}
                <SocialIcon fgColor='gray' bgColor='transparent' url="https://twitter.com/in/jaketrent" />
                <SocialIcon fgColor='gray' bgColor='transparent' url="https://linkedin.com/in/jaketrent" />
                <SocialIcon fgColor='gray' bgColor='transparent' url="https://instagram.com/in/jaketrent" />
            </m.div>

            <m.div initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}

                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex space-x-2 items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    fgColor='gray'
                    network='email'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:block text-black'>Get in touch</p>

            </m.div>
        </LazyMotion>
    </header >
)

export default Header