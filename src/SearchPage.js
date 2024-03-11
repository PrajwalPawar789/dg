import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PricingPage from './PricingPage';
import Navbar from './Navbar';

const SearchPage = () => {
    

    return (
        <div>
            <Navbar/>
            <h1 className="text-blue">SearchPage</h1>
            <p>Welcome to the SearchPage!</p>
            
        </div>
    );
};

export default SearchPage;
