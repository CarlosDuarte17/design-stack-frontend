import React from 'react'
import { DropOptions } from './DropOptions'
import { DropZoneFile } from './DropZoneFile'

export default function DropZone() {
    return (
        <div>
            <DropOptions />
            <DropZoneFile />
        </div>
    )
}
