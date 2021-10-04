import React, { useEffect, useState } from 'react'
import { useParams, Redirect } from 'react-router'
import {doc, getDoc} from 'firebase/firestore';
import db from '../config/Firebase';


const Post = () => {
    const { id } = useParams();

    const [articulo, setArticulo] = useState({nombre:'', fecha:''});

    useEffect(() => {
        try {
            const getArticle = async () => {
                const data = doc(db, 'tareas', id);
                const getCol = await getDoc(data);
                const infoArticle = getCol.data();
                setArticulo(infoArticle);
            }
            getArticle();
        } catch (error) {
            console.log("Error:" , error)
        }
    }, [id])

    return (
        <>
            {
                articulo ? (
                    <div>
                        <h1>Información del artículo</h1>
                        <p>Nombre: {articulo.nombre}</p>
                        <hr />
                        <p>Fecha: {articulo.fecha}</p>
                    </div>
                ) : (
                    <Redirect to="/" />
                )
                    
            }
        </>
        
    )
}

export default Post
