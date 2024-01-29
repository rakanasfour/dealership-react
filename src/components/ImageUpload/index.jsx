import React, { useState } from 'react';

const ImageUpload = () => {

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleImageUpload = async () => {
    if (!image) {
      alert('Please select an image.');
      return;
    }

    // Replace with your actual API endpoint and API key
    const apiUrl = 'https://3ylmyoczh2.execute-api.us-east-2.amazonaws.com/v1/dealership-python/upload';
    const value = 'multipart/form-data';

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': value,
        },
        body: formData,
      });

      if (response.ok) {
        alert('Image uploaded successfully!');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('An error occurred while uploading the image.');
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
    </div>
  );
};

export default ImageUpload;
