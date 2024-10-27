import React, { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import NotFound from '../notfound/NotFound'
import UserData from '../../components/user/UserData'
import UserAlbums from '../../components/user/UserAlbums'
import { TailSpin } from 'react-loader-spinner'

const User: React.FC = () => {
  // @ts-ignore
  const { user, albums } = useLoaderData()
  return (
    <Suspense fallback={<TailSpin />}>
      <Await resolve={Promise.all([user, albums])} errorElement={<NotFound />}>
        {([user, albums]) => (
          <div>
            <UserData user={user} />
            <UserAlbums albums={albums} />
          </div>
        )}
      </Await>
    </Suspense>
  )
}

export default React.memo(User)