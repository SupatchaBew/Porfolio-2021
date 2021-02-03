import React from 'react'
import './footer.css'
import {
    FaGithub,
    FaLinkedin,
    FaBehance
} from 'react-icons/fa'
import { socialLinkObj } from "../HomePage/data"

function Footer({copyRightText}) {
    return (
        <>
            <div className="footer-container">
                <p>{copyRightText}</p>
                <div className="footer-link-wrapper">
                    <a href={socialLinkObj.gitHubLink}><FaGithub /></a>
                    <a href={socialLinkObj.linkedInLink}><FaLinkedin /></a>
                    <a href={socialLinkObj.behanceLink}><FaBehance /></a>
                </div>
            </div>
        </>
    )
}

export default Footer;