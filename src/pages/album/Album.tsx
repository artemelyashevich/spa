import React, { Suspense } from 'react'
import { Await, Link, useLoaderData } from 'react-router-dom'
import NotFound from '../notfound/NotFound'
import { IPhoto } from '../../types/photo.type'
import { IUser } from '../../types/user.type'
import PhotoCard from '../../components/album/PhotoCard'
import { TailSpin } from 'react-loader-spinner'

const Album: React.FC = () => {
  // @ts-ignore
  const data = useLoaderData()
  return (
    <Suspense fallback={<TailSpin />}>
      <Await resolve={data} errorElement={<NotFound />}>
        {(resolvedData) => (
          <div>
            <div className="mb-10">
              <h1 className="text-lg mb-5">{resolvedData.album.title.toUpperCase()}</h1>
              <div className="flex gap-2">
                <span>Created by: </span>
                <Link
                  className="hover:text-blue-700 hover:underline"
                  to={`/users/${resolvedData.userId}`}
                >
                  {
                    resolvedData.users.find(
                      (user: IUser) => user.id === +resolvedData.album.userId
                    ).name
                  }
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5">
              {resolvedData.photos.map((photo: IPhoto) => <PhotoCard key={photo.id} photo={photo} />)}
            </div>
          </div>
        )}
      </Await>
    </Suspense>
  )
}

export default React.memo(Album)