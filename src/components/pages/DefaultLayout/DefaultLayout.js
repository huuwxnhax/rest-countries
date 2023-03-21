import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../../Header/Header';
import NavBar from '../../NavBar/NavBar';
import Content from '../../Content/Content';
import { useState } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [selectedRegion, setSelectedRegion] = useState('All');
    const [search, setSearch] = useState('');

    const handleSelected = (selectedRegion) => {
        setSelectedRegion(selectedRegion);
        console.log(selectedRegion);
    };

    const handleSearch = (search) => {
        setSearch(search);
        console.log(search);
    };

    return (
        <div className={cx('wrapper')}>
            <Header />
            <NavBar onSelectedRegion={handleSelected} onChangeInput={handleSearch} />
            <div className={cx('content')}>
                <Content selectedRegion={selectedRegion} valueSearch={search} />
            </div>
        </div>
    );
}

export default DefaultLayout;
