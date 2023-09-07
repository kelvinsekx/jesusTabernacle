import React from 'react'
import {YoutubeIcon, InstagramIcon, MapPinIcon, MailIcon} from 'lucide-react'
import {ContactForm} from '@/components/ContactForm/form'
import {Container} from '@/components/container'

const ContactUs = ()=> {
    return <Container>
        <div className='flex flex-col items-center'>
            <header className='text-black text-4.5xl pb-2'>Contact Us</header>
            <div className='flex gap-10 w-fit pt-20'>
                <ContactUs.Slate icon={<MapPinIcon />} aside={'Visit us'} main={'No 2, imaginary address, kunle estate, Ibadan, Oyo state'} />
                <ContactUs.Slate icon={<MailIcon />} aside={'Mail:'} main={'@church2church'} />
                <ContactUs.Slate icon={<InstagramIcon />} aside={'Instagram:'} main={'@church2church'} />
                <ContactUs.Slate icon={<YoutubeIcon />} aside={'Visit us'} main={'@church2church'} />
            </div>
            <ContactForm />
        </div>
    </Container>
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