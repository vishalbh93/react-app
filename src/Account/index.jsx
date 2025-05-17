import React from "react";
import { useSelector } from 'react-redux';
import Account from './Account.jsx';

const Index = () => {
    const { pageData } = useSelector((state) => state.loadLoginPageData);
    console.log(pageData);
    <Account/>
}

export default Index;