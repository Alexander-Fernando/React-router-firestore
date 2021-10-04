import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import db from '../config/Firebase.js';
import {collection, getDocs } from 'firebase/firestore';


const Blog = () => {

  const [Articulo, setArticulo] = useState([]);

  useEffect(() => {
    const getDatos = async () => {
      const articles = [];
      const datos = await getDocs(collection(db, "tareas"));
      datos.forEach((doc) => {
        const data = doc.data();
        articles.push({...data, id: doc.id});
      })
      setArticulo(articles);
    }
    getDatos();
  }, [])
  


    return (
        <div>
            <h2>
              Blog
            </h2>
            <ul>
              {
                Articulo.map(elem =>(
                  <li key = {elem.id}>
                    <Link to={`/post/${elem.id}`}>
                      {elem.nombre}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
    )
}

export default Blog
