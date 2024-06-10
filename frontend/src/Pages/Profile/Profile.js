import React from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="card-content">
      <h1 className="profile-h1"> Your Profile</h1>
      <br></br>
      <Card>
        <Card.Body>
          <div className="my-questions">
            <p className="my-h4s">Name : </p>
            <hr></hr>
            <p className="my-h4s">lastName : </p>
            <hr></hr>
            <p className="my-h4s">Email : </p>
            <hr></hr>
            <p className="my-h4s">Phone : </p>
          </div>
          <Card.Title className="user-info">{user && user.name}</Card.Title>
          <hr></hr>
          <Card.Title className="user-info">{user && user.lastName}</Card.Title>
          <hr></hr>
          <Card.Title className="user-info">{user && user.email}</Card.Title>
          <hr></hr>
          <Card.Title className="user-info">{user && user.phone}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
