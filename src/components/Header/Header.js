import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { HiOutlineMoon } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'default');

    const handleOnclick = () => {
        if (theme === 'default') {
            setTheme('dark');
        } else {
            setTheme('default');
        }
        console.log(theme);
    };

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
        <div className={cx('wrapper')}>
            <Link to={'/'} className={cx('title')}>
                <div>Where in the world?</div>
            </Link>
            <div className={cx('mode')}>
                <HiOutlineMoon className={cx('icon')} />
                <button className={cx('mode-btn')} onClick={handleOnclick}>
                    {theme === 'default' ? 'Default Mode' : 'Dark Mode'}
                </button>
            </div>
        </div>
    );
}

export default Header;
