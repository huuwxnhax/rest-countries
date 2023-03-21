import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import { AiOutlineSearch, AiOutlineArrowDown } from 'react-icons/ai';
import { useState, useRef, useEffect } from 'react';

const cx = classNames.bind(styles);

function NavBar({ onSelectedRegion, onChangeInput }) {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    /*handle select inner text value dropdown */
    const handleSelected = (e) => {
        const selectedRegion = e.target.innerText;
        setIsOpen(false);
        onSelectedRegion(selectedRegion);
    };

    /**
     * handle get value input
     */
    const handleGetValueInput = (e) => {
        const valueInput = e.target.value;
        setInputValue(valueInput);
    };

    const handleSubmit = (e) => {
        onChangeInput(inputValue);
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
