import React, { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { IAlbum } from '../../types/album.type'
import AlbumCard from '../../components/album/AlbumCard'
import { TailSpin } from 'react-loader-spinner'

const Albums: React.FC = () => {
    //@ts-ignore
    const { albums } = useLoaderData()
    return (
        <Suspense fallback={<TailSpin />}>
            <Await resolve={albums}>
                {(resolvedData: IAlbum[]) => (
                    <div>
                        {resolvedData.map((album: IAlbum) => <AlbumCard key={album.id} album={album} />)}
                    </div>
                )}
            </Await>
        </Suspense>
    )
}

export default React.memo(Albums)