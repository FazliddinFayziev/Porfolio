import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://www.linkedin.com/in/fazliddin-fayziev-6983a4260/'>
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/fazliddin__fayziev/">
                    <BsInstagram />
                </a>
            </div>
            <div>
                <a href="https://t.me/javascript_console">
                    <BiLogoTelegram />
                </a>
            </div>
            <div>
                <a href="https://github.com/FazliddinFayziev">
                    <BsGithub />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia