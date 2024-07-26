import React, { useState, useRef, useEffect } from 'react';

export default function DropdownSearch({ options }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpenFirst, setIsOpenFirst] = useState(false);

    const dropdownRef = useRef(null); 

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpenFirst(false);
            }
        }

        if (isOpenFirst) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpenFirst]); 

    const toggleDropdownFirst = () => setIsOpenFirst(!isOpenFirst);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleOptionClick = (optionValue) => {
        setSelectedOption(optionValue);
        setIsOpenFirst(false);
    };

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <>
            <label className='form-label'>Dropdown Search</label>
            <div className='dropdown-crms' ref={dropdownRef}>
                <div className='dropdown'>
                    <button className="dropdown-toggle btn btn-crm w-100" onClick={toggleDropdownFirst}>
                        {selectedOption ? options.find(option => option.value === selectedOption).label : '-Select-'}
                    </button>
                    {isOpenFirst && (
                        <div className="dropdown-menu show px-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="form-control mt-2"
                            />
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map(option => (
                                    <div key={option.value} className="dropdown-item" onClick={() => handleOptionClick(option.value)}>
                                        {option.label}
                                    </div>
                                ))
                            ) : (
                                <div className="dropdown-item">No options found</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
