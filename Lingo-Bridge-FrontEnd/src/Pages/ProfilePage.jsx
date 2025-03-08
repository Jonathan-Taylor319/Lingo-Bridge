// UserProfilePage.jsx
import React, { useState, useEffect } from 'react';
import UserInfoForm from './UserInfoForm';
import { getUserInfo, updateUserInfo } from '../api/userApi'; // Your API calls

const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token'); // Example of token stored in localStorage

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await getUserInfo(token); // Fetch user data with token
        setUserInfo(data);
      } catch (err) {
        setError('Failed to fetch user info');
      }
    };

    fetchUserInfo();
  }, [token]);

  const handleUpdate = async (updatedData) => {
    try {
      const updatedUser = await updateUserInfo(updatedData, token); // Update user info with token
      setUserInfo(updatedUser);
      console.log('Updated user info:', updatedUser);
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  return (
    <div>
      <h1>Update Your Profile</h1>
      {userInfo ? (
        <UserInfoForm userInfo={userInfo} onSubmit={handleUpdate} />
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default UserProfilePage;
