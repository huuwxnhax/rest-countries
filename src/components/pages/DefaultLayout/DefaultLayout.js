import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Header from '../../Header/Header';
import NavBar from '../../NavBar/NavBar';
import Content from '../../Content/Content';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContentCountries } from '../../../redux/slice/contentSlice';
import { fetchFilterRigion } from '../../../redux/slice/filtersSlice';

const cx = classNames.bind(styles);

function DefaultLayout() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContentCountries());
    }, [dispatch]);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <NavBar />
            <div className={cx('content')}>
                <Content />
            </div>
        </div>
    );
}

export default DefaultLayout;
