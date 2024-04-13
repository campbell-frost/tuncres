import React from 'react'

interface youtubeVideoProps {
    link: string;
    title: string;
}

export default function YoutubeVideo({ link, title }: youtubeVideoProps) {
    return (
        <div className='responsive'>
            <iframe 
            width="560"
            height="315" 
            src={link}
            title="YouTube video player"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>

    )
}