import React from 'react';
import s from './Footer.module.scss';
import facebook from '../../../../../utils/img/footer/facebook.svg';
import twitter from '../../../../../utils/img/footer/twitter.svg';
import youtube from '../../../../../utils/img/footer/youtube.svg';
import insta from '../../../../../utils/img/footer/insta.svg';
import styles from "../../../../../App.module.scss";

export const Footer = () => {
    return (
        <footer>
            <div className={s.page__footer}>
                <div className={`${styles.container} ${s.footer__container}`}>
                    <div className={s.footer__body}>
                        <div className={s.footer__addressBlock}>
                            <h4 className={s.footer__title}>
                                plantku
                            </h4>
                            <div className={s.footer__name}>
                                Plantku House
                            </div>
                            <div className={s.footer__address}>
                                Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55282
                            </div>
                        </div>
                        <div className={s.footer__column}>
                            <h4>
                                Perusahaan
                            </h4>
                            <div>
                                Tentang Kami
                            </div>
                            <div>
                                Hubungi Kami
                            </div>
                        </div>
                        <div className={s.footer__column}>
                            <h4>
                                Produk
                            </h4>
                            <div>
                                Tanaman
                            </div>
                            <div>
                                Tanaman Lain
                            </div>
                        </div>
                        <div className={s.footer__socials}>
                            <div>
                                Contacts:
                            </div>
                            <div className={s.footer__socialsBlock}>
                                <a href="">
                                    <img src={facebook} alt="facebook"/>
                                </a>
                                <a href="">
                                    <img src={insta} alt="insta"/>
                                </a>
                                <a href="">
                                    <img src={twitter} alt="twitter"/>
                                </a>
                                <a href="">
                                    <img src={youtube} alt="youtube"/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};