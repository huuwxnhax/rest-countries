import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import { AiOutlineSearch, AiOutlineArrowDown } from 'react-icons/ai';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import filtersSlice from '../../redux/slice/filtersSlice';

const cx = classNames.bind(styles);

function NavBar() {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    /*handle select inner text value dropdown */
    const handleSelected = (e) => {
        const region = e.target.innerText;
        console.log(region);
        setIsOpen(false);
        dispatch(filtersSlice.actions.selectFiltersRegion(e.target.innerText));
    };

    /**
     * handle get value input
     */
    const handleGetValueInput = (e) => {
        const valueInput = e.target.value;
        console.log(valueInput);
        setInputValue(valueInput);
        dispatch(filtersSlice.actions.selectFiltersSearch(valueInput));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue('');
    };

    /* start handle dropdown*/
    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); /*end handle dropdown*/

    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <form onSubmit={handleSubmit}>
                    <AiOutlineSearch className={cx('search-icon')} />
                    <input
                        className={cx('search-input')}
                        type="text"
                        value={inputValue}
                        placeholder="Search for a country..."
                        autoComplete="off"
                        onChange={handleGetValueInput}
                    />
                </form>
            </div>

            <div className={cx('filter')} ref={dropdownRef}>
                <div className={cx('dropdown')}>
                    <div className={cx('dropdown-btn')}>
                        <button className={cx('dropdown-toggle')} onClick={handleDropdown}>
                            Filter by Region
                        </button>
                        <AiOutlineArrowDown className={cx('icon')} />
                    </div>

                    {isOpen && (
                        <div className={cx('dropdown-content')}>
                            <ul className={cx('dropdown-item')} onClick={handleSelected}>
                                <li>All</li>
                                <li>Africa</li>
                                <li>America</li>
                                <li>Asia</li>
                                <li>Europe</li>
                                <li>Oceania</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
