import styles from './CountryDetails.module.scss';
import classNames from 'classnames/bind';
import Header from '../../Header/Header';
import Details from '../../Details/Details';

const cx = classNames.bind(styles);

function CountryDetails() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('details')}>
                <Details />
            </div>
        </div>
    );
}

export default CountryDetails;
