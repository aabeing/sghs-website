import React from 'react'

function ResultFrame({iframeLoading,googleUrl,height="600"}) {
    return (
        <iframe src={googleUrl}
            title='Results view page' frameborder="0" width="100%" height={height} allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" loading="lazy"
            onLoad={iframeLoading}>
        </iframe>
    )
}

export default ResultFrame