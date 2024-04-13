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
                title={title}

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

        </div>

    )
}