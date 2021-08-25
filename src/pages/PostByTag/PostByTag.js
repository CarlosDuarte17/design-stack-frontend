import React from 'react'
import { useParams } from 'react-router-dom'

export function PostByTag() {
    let { tag } = useParams();
    return (
        <div>
            tag
        </div>
    )
}
