import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {
    
    const { data: images, loading } = useFetchGifs( category )
        
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>
        {
            loading && <p>Loading</p>
        }
        <div className="card-grid">
                        
            {
                images.map((item) => 
                    <GifGridItem 
                    key={ item.id } 
                    { ...item }
                    /> )
            }
        
        </div>
        </>
    )
}
