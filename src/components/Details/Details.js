import styles from './Details.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';

const cx = classNames.bind(styles);
function Details() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav')}>
                <div className={cx('back')}>
                    <MdArrowBackIos className={cx('icon')} />
                    <button className={cx('back-btn')}>Back</button>
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('country-flag')}>
                    <img src="https://flagcdn.com/w320/vn.png" />
                </div>
                <div>
                    <div className={cx('details')}>
                        <div className={cx('body-detail')}>
                            <div className={cx('left')}>
                                <p className={cx('name')}>VietNam</p>
                                <p>Native name: Viet Nam</p>
                                <p>Population: 10293128989</p>
                                <p>Region: Asia</p>
                                <p>Sub Region: aiansa</p>
                                <p>Capital: Ha Noi</p>
                            </div>
                            <div className={cx('right')}>
                                <p>languages: Vietnamese</p>
                                <p>Currency: VND</p>
                                <p>Top Level Domain: 1</p>
                            </div>
                        </div>

                        <div className={cx('border-countries')}>
                            <p>Border Countries:</p>
                            <div className={cx('border-items')}>
                                <Link>
                                    <div className={cx('country-btn')}>Campodia</div>
                                </Link>
                                <Link>
                                    <div className={cx('country-btn')}>China</div>
                                </Link>
                                <Link>
                                    <div className={cx('country-btn')}>lao People's Democratic Republic</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
