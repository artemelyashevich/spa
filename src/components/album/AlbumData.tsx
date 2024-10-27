import React from 'react'
import { IAlbum } from '../../types/album.type'
import { Link } from 'react-router-dom'

interface IProps {
    album: IAlbum
}

const AlbumData: React.FC<IProps> = ({ album }) => {
    return (
        <li className="flex gap-4 items-center">
            <Link
                className="hover:text-blue-700 hover:underline"
                to={`/albums/${album.id}`}
            >
                {album.title.toUpperCase()}
            </Link>
        </li>
    )
}

export default React.memo(AlbumData)