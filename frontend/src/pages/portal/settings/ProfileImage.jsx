import React, { useState, useRef } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const ProfileImage = ({ firstName = 'User', initialPhoto = null }) => {
  const [photo, setPhoto] = useState(initialPhoto);
  const [uploading, setUploading] = useState(false);
  const [percent, setPercent] = useState(0);
  const fileInputRef = useRef(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPhoto(file);
    await uploadImage(file);
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('profileImage', file);

    try {
      setUploading(true);
      setPercent(0);

      const response = await axios.post('/api/upload-profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setPercent(percentCompleted);
        },
      });

      if (response.status === 200) {
        console.log('Upload successful!');
      } else {
        console.error('Upload failed:', response);
      }
    } catch (error) {
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleCancel = () => {
    setPhoto(initialPhoto);
    setPercent(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const getImageSrc = () => {
    if (typeof photo === 'string') {
      return photo;
    } else if (photo) {
      return URL.createObjectURL(photo);
    } else {
      return '/default-avatar.png';
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col gap-[49px]">
        {/* Profile Image Preview */}
        <div className=" relative w-20 h-20 lg:w-[217px] lg:h-[217px] border rounded-full">
          <img
            src={getImageSrc()}
            alt="Avatar"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Edit Button */}
        <label
          htmlFor="fileInput"
          className="absolute bottom-2 right-1 h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
        >
          <FaEdit size={20} />
        </label>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
        />
         {/* Cancel Button */}
      {photo && typeof photo !== 'string' && (
        <button
          onClick={handleCancel}
          className=" absolute  top-0 -right-3 px-3 py-1 text-red-500  text-xs rounded  flex items-center"
        >
          <FaTimes className="mr-1"  /> 
        </button>
      )}

      </div>

      {/* Upload Progress */}
      {uploading && (
        <p className="font-prata py-2 text-center text-xs text-green-400">
          Uploading... {percent}%
        </p>
      )}

     
      {/* User First Name */}
      <p className="mt-2 text-xs lowercase text-blue-600">{firstName}</p>
    </div>
  );
};

export default ProfileImage;
