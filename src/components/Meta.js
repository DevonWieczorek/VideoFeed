import React from 'react';
import MetaTags from 'react-meta-tags'

const Meta = () => {
    return(
        <MetaTags>
            <title>VideoFeed | Clean React UI</title>
            <meta name="description" content="Reuseable React & SASS based components" />
            <meta property="og:title" content="VideoFeed" />
            <meta property="og:image" content="../../public/favicon.ico" />
        </MetaTags>
    );
}

export default Meta;
