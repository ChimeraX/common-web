import React from 'react';
import User from './model/User';
import UserWidget from './widgets/UserWidget';

const user: User = {
	firstName: 'Tony',
	lastName: 'Stark',
	email: 'IronMan@stark.industries',
	profilePicture: 'https://ae01.alicdn.com/kf/HTB1SwWCcBKw3KVjSZFOq6yrDVXa4.jpg_q50.jpg',
	country: 'US',
	phoneNumber: '34242424543',
};

const App = () => <UserWidget user={user} />;

export default App;
