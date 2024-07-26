import React, { useState, useRef } from 'react';

export default function FileUploader() {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [altText, setAltText] = useState('');
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => setUploadedImage(e.target.result);
            fileReader.readAsDataURL(file);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            const file = event.dataTransfer.files[0];
            const fileReader = new FileReader();
            fileReader.onload = (e) => setUploadedImage(e.target.result);
            fileReader.readAsDataURL(file);
        }
    };

    const deleteImage = () => {
        setUploadedImage(null);
        setAltText('');
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="editable-content img-wrapper">
            {uploadedImage ? (
                <div className="image-container d-flex flex-column mb-4">
                    <a className="delete-btn" onClick={deleteImage}>
                        Delete
                    </a>
                    <img src={uploadedImage} className="img-fluid"/>
                </div>
                
            ) : (
                <div className="image-container editable-content d-flex align-items-center flex-column py-4 mb-4" onDragOver={handleDragOver} onDrop={handleDrop}>
                    <img className='mb-3' src = "/assets/img/drag-img.svg" alt="button" />
                    <p className="drop-text mb-1">Drag & drop image here</p>
                    <p className='drop-text mb-1'>or</p>
                    <div className="d-flex align-items-center">
                        <a href='javascript:void(0)' className="ml-2 upload-btn-container" onClick={handleClick}>
                            Browse File
                        </a>
                        <input
                            type="file"
                            name="file"
                            className="upload-file"
                            accept="image/*"
                            onChange={handleFileChange}
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
