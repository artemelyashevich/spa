import React from 'react'
import { IAlbum } from '../../types/album.type'
import AlbumData from '../album/AlbumData'

interface IProps {
    albums: IAlbum[]
}

const UserAlbums: React.FC<IProps> = ({ albums }) => {

    return (
        <div className="mt-5">
            <h2 className="font-medium text-xl">Albums</h2>
            <ul className="mt-5">
                {albums.map((album: IAlbum) => <AlbumData album={album} key={album.id} />)}
            </ul>
        </div>
    )
}

export default React.memo(UserAlbums)