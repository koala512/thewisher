import CardList from "../component/CardList/CardList";
import './PageList.css'
import Header from "../component/Header/Header";
import NavVertical from "../component/NavVertical/NavVertical";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getToken , getUuid} from '../utils/auth';


function PageList() {
    const [getLists, setGetLists] = useState([]);

    const token = getToken();
    const uuid = getUuid();
    const { id } = useParams();

    
     
console.log(getLists, 'getLists.length');
    const fetchLists = () => {
    axios.get(`https://powerful-hollows-79086.herokuapp.com/list/${uuid}`, {
      headers: {'Authorization': `Bearer ${token}`}
    })
        .then(res => {
            setGetLists(res.data.data);
        })
        .catch(err => {
            console.log(err);
        });
    };
    
    useEffect(() => {
        fetchLists();
      }, []);


    return (
        <>
            <Header/>
            <div className='page'>
                <NavVertical/>
                <div className='m-auto'>
                     {
                   getLists.length > 0 ? getLists.map(list => {
                            console.log(list, 'list');
                            <CardList key={list.id} list={list}/>
                    }) : 
                        <h1>Vous n'avez pas encore de listes</h1>
                }
                </div>
            </div>
        </>

    )
}

export default PageList;