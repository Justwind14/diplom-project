import React from 'react';
import {Link} from "react-router-dom";
import List from "../List";

const Footer = () => {
    const items = [
        <Link target="_blank" rel="noopener noreferrer" to="#">
            <svg className="socials__icon1" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                viewBox="0 0 32 32" fill="none">
                <path className="icon-path-bg" d="M31.4506 0H0V32H31.4506V0Z" fill="white"/>
                <g transform="translate(10 8)" width="11" height="16" viewBox="0 0 11 16"
                fill="none">
                    <path
                        d="M9.08827 8.28L9.50677 5.61602H6.89013V3.88729C6.89013 3.15847 7.25565 2.44806 8.42756 2.44806H9.61713V0.179975C9.61713 0.179975 8.53763 0 7.50551 0C5.35064 0 3.94211 1.27593 3.94211 3.5857V5.61602H1.54678V8.28H3.94211V14.72H6.89013V8.28H9.08827Z"
                        fill="black"/>
                </g>
            </svg>
        </Link>,
        <Link target="_blank" rel="noopener noreferrer" to="#">
            <svg className="social__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                viewBox="0 0 32 32" fill="none">
                <path className="icon-path-bg" d="M31.4506 0H0V32H31.4506V0Z" fill="white"/>
                <g width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <path transform="translate(7.5 8.5)"
                        d="M8.13677 3.68162C6.02163 3.68162 4.31555 5.38494 4.31555 7.49666C4.31555 9.60838 6.02163 11.3117 8.13677 11.3117C10.2519 11.3117 11.958 9.60838 11.958 7.49666C11.958 5.38494 10.2519 3.68162 8.13677 3.68162ZM8.13677 9.97693C6.76991 9.97693 5.65248 8.86463 5.65248 7.49666C5.65248 6.12869 6.76658 5.01639 8.13677 5.01639C9.50695 5.01639 10.6211 6.12869 10.6211 7.49666C10.6211 8.86463 9.50363 9.97693 8.13677 9.97693ZM13.0056 3.52557C13.0056 4.02029 12.6065 4.41541 12.1143 4.41541C11.6188 4.41541 11.223 4.01697 11.223 3.52557C11.223 3.03416 11.6221 2.63572 12.1143 2.63572C12.6065 2.63572 13.0056 3.03416 13.0056 3.52557ZM15.5364 4.42869C15.4799 3.2367 15.2072 2.18084 14.3325 1.31092C13.4612 0.440997 12.4036 0.168732 11.2097 0.108966C9.9792 0.0392395 6.29101 0.0392395 5.0605 0.108966C3.8699 0.165411 2.81233 0.437677 1.93768 1.3076C1.06302 2.17752 0.793639 3.23338 0.733776 4.42537C0.663937 5.65389 0.663937 9.33611 0.733776 10.5646C0.790313 11.7566 1.06302 12.8125 1.93768 13.6824C2.81233 14.5523 3.86658 14.8246 5.0605 14.8844C6.29101 14.9541 9.9792 14.9541 11.2097 14.8844C12.4036 14.8279 13.4612 14.5556 14.3325 13.6824C15.2039 12.8125 15.4766 11.7566 15.5364 10.5646C15.6063 9.33611 15.6063 5.65721 15.5364 4.42869ZM13.9468 11.8828C13.6874 12.5336 13.1852 13.0349 12.53 13.2972C11.5489 13.6857 9.22094 13.5961 8.13677 13.5961C7.05259 13.5961 4.72128 13.6824 3.74353 13.2972C3.09169 13.0383 2.58951 12.5369 2.32678 11.8828C1.93768 10.9033 2.02747 8.57908 2.02747 7.49666C2.02747 6.41424 1.941 4.0867 2.32678 3.11053C2.58619 2.45975 3.08837 1.95838 3.74353 1.69608C4.72461 1.3076 7.05259 1.39725 8.13677 1.39725C9.22094 1.39725 11.5523 1.31092 12.53 1.69608C13.1818 1.95506 13.684 2.45643 13.9468 3.11053C14.3359 4.09002 14.2461 6.41424 14.2461 7.49666C14.2461 8.57908 14.3359 10.9066 13.9468 11.8828Z"
                        fill="black"/>
                </g>
            </svg>
        </Link>,
        <Link to="#" target="_blank" rel="noopener noreferrer">
            <svg className="social__icon" width="32" height="32" viewBox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path className="icon-path-bg" d="M31.9259 0H0.475342V32H31.9259V0Z" fill="white"/>
                <g clip-path="url(#clip0_190_1616)">
                    <path
                        d="M16.7402 8.20312C13.5555 8.20312 10.4081 10.3406 10.4081 13.8C10.4081 16 11.6373 17.25 12.3822 17.25C12.6895 17.25 12.8664 16.3875 12.8664 16.1438C12.8664 15.8531 12.1308 15.2344 12.1308 14.025C12.1308 11.5125 14.0304 9.73125 16.4888 9.73125C18.6026 9.73125 20.167 10.9406 20.167 13.1625C20.167 14.8219 19.5058 17.9344 17.3641 17.9344C16.5912 17.9344 15.9301 17.3719 15.9301 16.5656C15.9301 15.3844 16.7495 14.2406 16.7495 13.0219C16.7495 10.9531 13.8349 11.3281 13.8349 13.8281C13.8349 14.3531 13.9001 14.9344 14.1329 15.4125C13.7045 17.2688 12.8292 20.0344 12.8292 21.9469C12.8292 22.5375 12.913 23.1188 12.9689 23.7094C13.0744 23.8281 13.0216 23.8156 13.183 23.7563C14.7474 21.6 14.6916 21.1781 15.3993 18.3562C15.7811 19.0875 16.7681 19.4812 17.5503 19.4812C20.8468 19.4812 22.3274 16.2469 22.3274 13.3313C22.3274 10.2281 19.6641 8.20312 16.7402 8.20312Z"
                        fill="black"/>
                </g>
                <defs>
                    <clipPath id="clip0_190_1616">
                        <rect width="11.9193" height="16" fill="white" transform="translate(10.4081 8)"/>
                    </clipPath>
                </defs>
            </svg>
        </Link>,
        <Link to="#" target="_blank" rel="noopener noreferrer">
            <svg className="social__icon" width="32" height="32" viewBox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path className="icon-path-bg" d="M31.6636 0H0.213013V32H31.6636V0Z" fill="white"/>
                <g clip-path="url(#clip0_190_1612)">
                    <path
                        d="M22.4181 12.7411C22.4281 12.8832 22.4281 13.0253 22.4281 13.1675C22.4281 17.5025 19.1509 22.4974 13.161 22.4974C11.3156 22.4974 9.60132 21.9593 8.1593 21.0253C8.42149 21.0558 8.67357 21.0659 8.94585 21.0659C10.4685 21.0659 11.8702 20.5482 12.9895 19.6649C11.5576 19.6345 10.3576 18.6903 9.94415 17.3908C10.1458 17.4213 10.3475 17.4416 10.5593 17.4416C10.8517 17.4416 11.1442 17.4009 11.4164 17.3299C9.92401 17.0253 8.80465 15.7055 8.80465 14.1116V14.071C9.23825 14.3147 9.74249 14.467 10.2769 14.4873C9.39959 13.8984 8.82483 12.8933 8.82483 11.7563C8.82483 11.1472 8.98614 10.5888 9.26851 10.1015C10.8719 12.0913 13.282 13.3908 15.9844 13.5329C15.934 13.2893 15.9038 13.0355 15.9038 12.7817C15.9038 10.9746 17.3559 9.5025 19.1609 9.5025C20.0987 9.5025 20.9457 9.89844 21.5407 10.538C22.2768 10.3959 22.9827 10.1218 23.6079 9.74616C23.3659 10.5076 22.8516 11.1472 22.176 11.5533C22.8315 11.4822 23.4668 11.2994 24.0516 11.0457C23.608 11.6954 23.0533 12.274 22.4181 12.7411Z"
                        fill="black"/>
                </g>
                <defs>
                    <clipPath id="clip0_190_1612">
                        <rect width="15.8924" height="16" fill="white" transform="translate(8.1593 8)"/>
                    </clipPath>
                </defs>
            </svg>
        </Link>
    ]
    return (
        <footer className="footer center">
            <p className="footer__copyright">© 2022 Brand All Rights Reserved.</p>
            <h2 className="hidden">Contacts</h2>
            <List
                className="footer__social-icons"
                itemClassName="footer__icon-btn"
                items={items}
            />
        </footer>
    );
};

export default Footer;