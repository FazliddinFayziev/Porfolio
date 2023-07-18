import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href='https://www.linkedin.com/in/fazliddin-fayziev-6983a4260/'>
                <div>
                    <BsLinkedin />
                </div>
            </a>
            <a href="https://www.instagram.com/fazliddin__fayziev/">
                <div>
                    <BsInstagram />
                </div>
            </a>
            <a href="https://t.me/javascript_console">
                <div>
                    <BiLogoTelegram />
                </div>
            </a>
            <a href="https://github.com/FazliddinFayziev">
                <div>
                    <BsGithub />
                </div>
            </a>
        </div>
    )
}

export default SocialMedia