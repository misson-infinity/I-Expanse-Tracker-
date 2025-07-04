import React from 'react';
import devImage from '../assets/Picsart_24-12-22_22-58-18-749.png';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
const DeveloperPage = () => (
    <div className="developer-page card">
        <img src={devImage} alt="Md Habibur Rahman Mahi" className="dev-photo" />
        <h1>About the Founder</h1>
        <div className="developer-details">
            <h2>Md Habibur Rahman Mahi</h2>
            <p><strong>founder and CEO of infinity group</strong></p>
            <p>একজন প্রযুক্তিপ্রেমী এবং উদ্যোক্তা, যিনি মানুষের দৈনন্দিন জীবনকে সহজ করার জন্য অ্যাপ্লিকেশন তৈরি করতে ভালোবাসেন।</p>
        </div>
        <hr />
        <div className="contact-info">
            <h3>Contact Info</h3>
            <p><strong>WhatsApp & Telegram:</strong> 01727722018</p>
        </div>
        <div className="social-links">
            <a href="https://wa.me/8801727722018" target="_blank" rel="noopener noreferrer" title="WhatsApp"><FaWhatsapp /></a>
            <a href="https://t.me/md_habibur_rahman_mahi" target="_blank" rel="noopener noreferrer" title="Telegram"><FaTelegramPlane /></a>
            <a href="https://www.facebook.com/share/1L8yaf25bk/" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebook /></a>
            <a href="https://www.instagram.com/h.r_mahi_?igsh=Z242dWFtcDZwdjF2" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
        </div>
    </div>
);
export default DeveloperPage;