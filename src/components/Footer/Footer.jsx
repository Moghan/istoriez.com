import React from 'react';
import { strings, slugs } from '../../utils/localization';
import styles from './Footer.module.scss'
import StateLink from '../StateLink/StateLink'
import logo from '../../assets/images/istoriez.png'
import FontIcon from '../FontIcons/FontIcon'

const GitHub = () => {
    return (
        <svg style={{ height: 41, width: 40 }} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="#9c9c9c" /><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>
    )
}

const Footer = ({ audioplaying }) => {
    return (
        <footer className={styles.footer} style={audioplaying ? { marginBottom: "107px" } : {}}>
            <div className={styles.icons}>
                <StateLink to='/' className={styles.logo}>
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>
                </StateLink>
                <a href={slugs.facebook}>
                    <FontIcon>&#xf234;</FontIcon>
                </a>
                <a href={slugs.github} style={{ marginLeft: 10, color: "lightgray" }}>
                    <GitHub />
                </a>
            </div>
            <div className={styles.text}>
                <span>© iStoriez 2019-2020.</span>
                <span style={{ whiteSpace: "nowrap" }}> {strings.stories} {strings.online}.</span>
            </div>
        </footer>
    );
}

export default Footer;