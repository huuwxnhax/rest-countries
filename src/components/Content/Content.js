import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import Country from './Country/Country';

const cx = classNames.bind(styles);

function Content({ selectedRegion, valueSearch }) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (valueSearch) {
                    response = await fetch(`https://restcountries.com/v3.1/name/${valueSearch}`);
                } else if (selectedRegion === 'All') {
                    response = await fetch(`https://restcountries.com/v3.1/all`);
                } else {
                    response = await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`);
                }
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.log('Error:', error.message);
            }
        };
        fetchData();
    }, [selectedRegion, valueSearch]);

    useEffect(() => {
        console.log(countries);
    });

    return (
        <div className={cx('wrapper')}>
            {countries.length ? (
                countries?.map((country) => {
                    return (
                        <Link key={country?.cca3} to={{ pathname: `/${country?.cca3}` }}>
                            <div className={cx('container')}>
                                <div className={cx('thumbnail')}>
                                    <img
                                        className={cx('thumbnail-img')}
                                        src={country?.flags?.png}
                                        alt={`${country?.name?.common} flag`}
                                    />
                                </div>
                                <div className={cx('details')}>
                                    <div className={cx('name')}>{country?.name?.common}</div>
                                    <div className={cx('population')}>{`Population: ${country?.population}`}</div>
                                    <div className={cx('captipal')}>{`Capital: ${country?.capital}`}</div>
                                    <div className={cx('region')}>{`Region: ${country?.region}`}</div>
                                </div>
                            </div>
                        </Link>
                    );
                })
            ) : (
                <div className={cx('notification')}>No matching countries found. Please try a different search.</div>
            )}
        </div>
    );
}

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
