import React, { useState } from 'react';
import Header from "../component/Header/Header";
import NavVertical from "../component/NavVertical/NavVertical";
import FormList from "../component/FormList/FormList";


function PageCreateList() {
    
    return (
        <>
            <Header/>
            <div className='page'>
                <NavVertical/>
                <div className='m-auto w-50'>
                    <div className='h1 mb-5 text-center'>Créer votre Wishlist</div>
                    <FormList/>
                </div>
            </div>
        </>
    )
}

export default PageCreateList;