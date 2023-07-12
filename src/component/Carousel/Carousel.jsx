import React, { useState, useEffect, useCallback } from "react";
import { client } from "../../client";

const Carousel = () => {
    const [isCarouselLoading, setIsCarouselLoading] = useState(false)
    const[carouselSlides, setCarouselSlides] = useState([])

    const cleanUpCarouselSlides = useCallback((rawData) => {
        const cleanSlides = rawData.map((slide) => {
            const {sys, fields} = slide
            const {id} = sys
            const slideTitle = fields.title 
            const slideDescription = fields.description  
            const slideBg = fields.image.fields.file.url 
            const updateSlide = { id, slideTitle, slideDescription, slideBg }
            return updatedSlide
        })

        setCarouselSlides(cleanSlides)
    }, [])

   const getCarouselSlides = useCallback( async () => {
    setIsCarouselLoading(true)
    try {
        const response = await client.getEntries({ content_type: 'contensiteTechno' })
        const responseDada = response.items
        if(responseDada) {
            cleanUpCarouselSlides(responseDada)
        } else {
            setCarouselSlides([])
        }
        setIsCarouselLoading(false)
    } catch (error) {
        console.log(error)
        setIsCarouselLoading(false)
    }
}, [cleanUpCarouselSlides])

useEffect(() => {
    getCarouselSlides()
}, [getCarouselSlides])

    console.log(carouselSlides)

    return(
        <>
        <h1>Techno Tools</h1>
        </>
    )
}

export default Carousel
