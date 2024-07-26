import React, { useState, useRef, useEffect } from 'react';
import { Badge, Tooltip, OverlayTrigger } from 'react-bootstrap';

export default function MultiCongratsPopup({ options }) {
    const [selectedOptionsFirst, setSelectedOptionsFirst] = useState([]);
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
        const isSelected = selectedOptionsFirst.includes(optionValue);
        if (isSelected) {
            setSelectedOptionsFirst(selectedOptionsFirst.filter(item => item !== optionValue));
        } else {
            setSelectedOptionsFirst([...selectedOptionsFirst, optionValue]);
        }
    };

    const handleOptionChangeSecond = (optionValue) => {
        setSelectedOptionSecond(optionValue);
    };

    const handleRemoveSelectedOption = (optionValue, event, dropdown) => {
        event.stopPropagation();
        if (dropdown === 'first') {
            setSelectedOptionsFirst(selectedOptionsFirst.filter(item => item !== optionValue));
        } else {
            setSelectedOptionSecond(null);
        }
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {selectedOptionsFirst.slice(1).map(option => (
                <div key={option}>{options.find(opt => opt.value === option).label}</div>
            ))}
        </Tooltip>
    );

    const getButtonLabel = () => {
        if (selectedOptionsFirst.length === 0) {
            return '-Select-';
        } else if (selectedOptionsFirst.length === 1) {
            const label = options.find(option => option.value === selectedOptionsFirst[0]).label;
            return (
                <Badge className='align-items-center d-flex' bg="light" text="dark">
                    {label}
                    <div className='cross-btn' onClick={(event) => handleRemoveSelectedOption(selectedOptionsFirst[0], event, 'first')}>
                        ×
                    </div>
                </Badge>
            );
        } else {
            const label = options.find(option => option.value === selectedOptionsFirst[0]).label;
            return (
                <div className='d-flex align-items-center'>
                    <Badge className='align-items-center d-flex me-1' bg="light" text="dark">
                        {label}
                        <div className='cross-btn' onClick={(event) => handleRemoveSelectedOption(selectedOptionsFirst[0], event, 'role')}>
                            ×
                        </div>
                    </Badge>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <span>{`...+${selectedOptionsFirst.length - 1}`}</span>
                    </OverlayTrigger>
                </div>
            );
        }
    };

    return (
        <>
            <label className='form-label'>Multiple Select Dependent</label>
            <div className='dropdown-crms' ref={refFirstDropdown}>
                <div className='dropdown'>
                    <button className="dropdown-toggle btn btn-crm w-100" onClick={toggleDropdownFirst}>
                        {getButtonLabel()}
                    </button>
                    {isOpenFirst && (
                        <div className="dropdown-menu show p-2">
                            {options.map(option => (
                                <div key={option.value} className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={selectedOptionsFirst.includes(option.value)}
                                        onChange={() => handleOptionChangeFirst(option.value)}
                                        id={`checkbox-first-${option.value}`}
                                    />
                                    <label className="form-check-label" htmlFor={`checkbox-first-${option.value}`}>
                                        {option.label}
                                    </label>
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
                        disabled={selectedOptionsFirst.length === 0}
                    >
                        {selectedOptionSecond ? options.find(option => option.value === selectedOptionSecond).label : 'Choose more options'}
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
