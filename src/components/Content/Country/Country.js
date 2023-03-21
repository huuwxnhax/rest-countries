import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './Country.module.scss';

const cx = classNames.bind(styles);

function Country(cca3Country, flagCountry, nameCountry, populationCountry, capitalCountry, regionCountry) {
    return (
        <Fragment>
            <Link to={{ pathname: `/${cca3Country}` }}>
                <div className={cx('container')}>
                    <div className={cx('thumbnail')}>
                        <img className={cx('thumbnail-img')} src={flagCountry} alt={`${nameCountry} flag`} />
                    </div>
                    <div className={cx('details')}>
                        <div className={cx('name')}>{nameCountry}</div>
                        <div className={cx('population')}>{`Population: ${populationCountry}`}</div>
                        <div className={cx('captipal')}>{`Capital: ${capitalCountry}`}</div>
                        <div className={cx('region')}>{`Region: ${regionCountry}`}</div>
                    </div>
                </div>
            </Link>
        </Fragment>
    );
}

export default Country;
