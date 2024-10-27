import React, { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { IUser } from '../../types/user.type';
import UserCard from '../../components/user/UserCard';
import { TailSpin } from 'react-loader-spinner';

const Users: React.FC = () => {
  // @ts-ignore
  const { users } = useLoaderData()

  return (
    <Suspense fallback={<TailSpin />}>
      <Await resolve={users}>
        {(resolvedUsers: IUser[]) => (
          <div className="mb-36">
            {resolvedUsers.map((user: IUser) => <UserCard key={user.id} user={user} />)}
          </div>
        )}
      </Await>
    </Suspense>
  )
}

export default React.memo(Users)