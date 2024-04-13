import React from 'react';
import YoutubeVideo from './youtubeVideo';

export default function Content() {
    return (
        <div className="flex items-center justify-center mt-40 mx-80 bg-white">
            <div className="m-20">
                <YoutubeVideo link='https://youtu.be/zLBIuKSKyHg?si=qvwSxc_JbsKFEk8K' title='funny' />
            </div>
        </div>
    );
}
