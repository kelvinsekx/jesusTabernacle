import React from 'react'
import {YoutubeIcon, InstagramIcon, MapPinIcon, MailIcon} from 'lucide-react'
import {ContactForm} from '@/components/ContactForm/form'
import {LargeContainer} from '@/components/container'
import {LocateUs} from '@/components/LocateUs/locateus'

const ContactUs = ()=> {
    return <LargeContainer>
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center gap-10 justify-center w-full py-20 bg-[url(/contact-graphics.jpg)]'>
                <header className='text-black text-4.5xl pb-2'>Contact Us</header>
                <div className='w-fit flex gap-10'>
                    <ContactUs.Slate icon={<MapPinIcon />} aside={'Visit us'} main={'No 2, imaginary address, kunle estate, Ibadan, Oyo state'} />
                    <ContactUs.Slate icon={<MailIcon />} aside={'Mail:'} main={'@church2church'} />
                    <ContactUs.Slate icon={<InstagramIcon />} aside={'Instagram:'} main={'@church2church'} />
                    <ContactUs.Slate icon={<YoutubeIcon />} aside={'Visit us'} main={'@church2church'} />
                </div>
            </div>
            <div className='w-3/4 relative bottom-8'>
                <ContactForm />
            </div>
        </div>
        <LocateUs />
    </LargeContainer>
}

const Slate = ({icon, aside, main}: {icon: React.ReactNode, aside: string, main: string})=> (
    <div className='flex flex-col items-center gap-2 w-44 text-center'>
        <span className='bg-[#D9D9D9] rounded-full w-12 h-12 flex justify-center items-center'>{ icon} </span>
        <span className='text-tb-grey2 pt-1'>{aside}</span>
        <span>{main}</span>
    </div>
)
ContactUs.Slate = Slate

export default  ContactUs