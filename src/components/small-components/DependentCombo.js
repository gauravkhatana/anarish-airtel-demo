import React, { useState, useRef, useEffect } from 'react';
import { Badge } from 'react-bootstrap';

export default function DependentCombo({ options }) {
    const [selectedOptionFirst, setSelectedOptionFirst] = useState(null);
    const [selectedOptionSecond, setSelectedOptionSecond] = useState(null);
    const [isOpenFirst, setIsOpenFirst] = useState(false);
    const [isOpenSecond, setIsOpenSecond] = useState(false);

    const refFirstDropdown = useRef(null);
    const refSecondDropdown = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (refFirstDropdown.current && !refFirstDropdown.current.contains(event.target)) {
                setIsOpenFirst(false);
            }
            if (refSecondDropdown.current && !refSecondDropdown.current.contains(event.target)) {
                setIsOpenSecond(false);
            }
        }

        if (isOpenFirst || isOpenSecond) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpenFirst, isOpenSecond]);

    const toggleDropdownFirst = () => setIsOpenFirst(!isOpenFirst);
    const toggleSecondDropdown = () => setIsOpenSecond(!isOpenSecond);

    const handleOptionChangeFirst = (optionValue) => {
        setSelectedOptionFirst(optionValue);
    };

    const handleRemoveSelectedOptionFirst = (event) => {
        event.stopPropagation(); 
        setSelectedOptionFirst(null);
    };

    const handleOptionChangeSecond = (optionValue) => {
        setSelectedOptionSecond(optionValue);
    };

    const getButtonLabelFirst = () => {
        if (!selectedOptionFirst) {
            return '-Select-';
        } else {
            const label = options.find(option => option.value === selectedOptionFirst).label;
            return (
                <Badge className='align-items-center d-flex' bg="light" text="dark">
                    {label}
                    <div className='cross-btn' onClick={handleRemoveSelectedOptionFirst}>
                        ×
                    </div>
                </Badge>
            );
        }
    };

    const getButtonLabelSecond = () => {
        return selectedOptionSecond ? options.find(option => option.value === selectedOptionSecond).label : 'Choose more options';
    };

    return (
        <>
            <label className='form-label'>Dependent Combo</label>
            <div className='dropdown-crms' ref={refFirstDropdown}>
                <div className='dropdown'>
                    <button className="dropdown-toggle btn btn-crm w-100" onClick={toggleDropdownFirst}>
                        {getButtonLabelFirst()}
                    </button>
                    {isOpenFirst && (
                        <div className="dropdown-menu show p-2">
                            {options.map(option => (
                                <div key={option.value} className="dropdown-item" onClick={() => handleOptionChangeFirst(option.value)}>
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <label className='form-label'>Select More</label>
            <div className='dropdown-crms' ref={refSecondDropdown}>
                <div className='dropdown'>
                    <button 
                        className="dropdown-toggle btn btn-crm w-100" 
                        onClick={toggleSecondDropdown} 
                        disabled={!selectedOptionFirst}  
                    >
                        {getButtonLabelSecond()}
                    </button>
                    {isOpenSecond && (
                        <div className="dropdown-menu show px-2">
                            {options.map(option => (
                                <div key={option.value} className="dropdown-item" onClick={() => handleOptionChangeSecond(option.value)}>
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
