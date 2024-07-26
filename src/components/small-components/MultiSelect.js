import React, { useState, useRef, useEffect } from 'react';
import { Badge, Tooltip, OverlayTrigger } from 'react-bootstrap';

export default function MultiSelect({options}) {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const refDropdown = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (refDropdown.current && !refDropdown.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionChange = (optionValue) => {
        const isSelected = selectedOptions.includes(optionValue);
        if (isSelected) {
            setSelectedOptions(selectedOptions.filter(item => item !== optionValue));
        } else {
            setSelectedOptions([...selectedOptions, optionValue]);
        }
    };

    const handleRemoveSelectedOption = (optionValue, event) => {
        event.stopPropagation();
        setSelectedOptions(selectedOptions.filter(item => item !== optionValue));
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {selectedOptions.slice(1).map(option => (
                <div key={option}>{options.find(opt => opt.value === option).label}</div>
            ))}
        </Tooltip>
    );

    const getButtonLabel = () => {
        if (selectedOptions.length === 0) {
            return '-Select-';
        } else if (selectedOptions.length === 1) {
            const label = options.find(option => option.value === selectedOptions[0]).label;
            return (
                <Badge className='align-items-center d-flex' bg="light" text="dark">
                    {label}
                    <div className='cross-btn' onClick={(event) => handleRemoveSelectedOption(selectedOptions[0], event)}>
                        ×
                    </div>
                </Badge>
            );
        } else {
            const label = options.find(option => option.value === selectedOptions[0]).label;
            return (
                <div className='d-flex align-items-center'>
                    <Badge className='align-items-center d-flex me-1' bg="light" text="dark">
                        {label}
                        <div className='cross-btn' onClick={(event) => handleRemoveSelectedOption(selectedOptions[0], event)}>
                            ×
                        </div>
                    </Badge>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <span>{`...+${selectedOptions.length - 1}`}</span>
                    </OverlayTrigger>
                </div>
            );
        }
    };

    return (
        <>
            <label className='form-label'>Multiple Select Dropdown</label>
            <div className='dropdown-crms' ref={refDropdown}>
                <div className='dropdown'>
                    <button className="dropdown-toggle btn btn-crm w-100" onClick={toggleDropdown}>
                    {getButtonLabel()}
                    </button>
                    {isOpen && (
                        <div className="dropdown-menu show p-2">
                            {options.map(option => (
                                <div key={option.value} className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={selectedOptions.includes(option.value)}
                                        onChange={() => handleOptionChange(option.value)}
                                        id={`checkbox-${option.value}`}
                                    />
                                    <label className="form-check-label" for={`checkbox-${option.value}`}>
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
