import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
import {AiFillYoutube} from 'react-icons/ai';

const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{ position : 'sticky', background:'#000', top:0 , justifyContent:'space-between'}}>
        <Link to="/" style={{display:'flex' , alignItems:'center'}}>
            {/* <img src={logo} alt="logo" height={45} /> */}
            <AiFillYoutube alt="logo" color='#b103fc84' size={65} /> 
            <button className='category-btn2'>
                <span> Buzz 
                    <span className='tube'>
                         Tube
                    </span>
                </span>
            </button>
        </Link>
        <SearchBar />
    </Stack>
)

export default Navbar
