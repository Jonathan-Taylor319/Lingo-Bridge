import React from 'react';


//placeholder - need to make it a state and update the state once the user logs in.......

export default function UserProfilePic = () => {
  // Assuming you have an image stored in the 'media' directory on the Django server
  const imageUrl = 'http://localhost:8000/media/my_image.jpg'; // Replace with your actual image URL

  return (
    <div>
      <img src={imageUrl} alt="My image" />
    </div>
  );
};
