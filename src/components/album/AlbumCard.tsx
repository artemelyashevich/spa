import React from 'react'
import { IAlbum } from '../../types/album.type'
import { Link } from 'react-router-dom'

interface IProps {
    album: IAlbum
}

const AlbumCard: React.FC<IProps> = ({ album }) => {
    return (
        <Link
            className="flex gap-5 items-center underline hover:text-blue-700 hover:underline mb-1"
            to={`${album.id}`}
        >
            <h2>{album.title.toUpperCase()}</h2>
        </Link>
    )
}

export default React.memo(AlbumCard)