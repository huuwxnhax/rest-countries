import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { Link } from 'react-router-dom';

// import Country from './Country/Country';

import { useSelector } from 'react-redux';
import { contentSelector } from '../../redux/selector';

const cx = classNames.bind(styles);

function Content() {
    // const [countries, setCountries] = useState([]);

    const datas = useSelector(contentSelector);

    // console.log(datas);

    return (
        <div className={cx('wrapper')}>
            {datas.map((data) => {
                return (
                    <Link key={data?.cca3} to={{ pathname: `/${data?.cca3}` }}>
                        <div className={cx('container')}>
                            <div className={cx('thumbnail')}>
                                <img
                                    className={cx('thumbnail-img')}
                                    src={data?.flags?.png}
                                    alt={`${data?.name?.common} flag`}
                                />
                            </div>
                            <div className={cx('details')}>
                                <div className={cx('name')}>{data?.name?.common}</div>
                                <div className={cx('population')}>{`Population: ${data?.population}`}</div>
                                <div className={cx('captipal')}>{`Capital: ${data?.capital}`}</div>
                                <div className={cx('region')}>{`Region: ${data?.region}`}</div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
// : (<div className={cx('notification')}>No matching countries found. Please try a different search.</div>)

/* <Country 
    key={country?.cca3},
    cca3Country={country?.cca3}
    flagCountry={ountry?.flags?.png} 
    nameCountry={country?.name?.common} 
    populationCountry={country?.population} 
    capitalCountry={ountry?.capital} 
    regionCountry={country?.region} 
    
/> */

export default Content;
