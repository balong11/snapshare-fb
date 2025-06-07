import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import React from 'react';

export default [
    {
        path: '/Login',
        element: Login
    },
    {
        path: '/',
        element: Home
    }
]

