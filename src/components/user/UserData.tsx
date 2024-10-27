import React from 'react'
import { IUser } from '../../types/user.type'

interface IProps {
    user: IUser
}

const UserData: React.FC<IProps> = ({ user }) => {
    const { name, email, website, phone, username } = user

    return (
        <div>
            <ul className='font-base text-gray-400 font-normal'>
                <h1 className='text-xl mb-3 font-medium text-black'>{name}</h1>
                <li className='flex gap-2'>
                    <span>Username:</span>
                    <p>{username}</p>
                </li>
                <li className='flex gap-2'>
                    <span>Email:</span>
                    <p className='underline'>{email}</p>
                </li>
                <li className='flex gap-2'>
                    <span>Site:</span>
                    <p className='underline'>{website}</p>
                </li>
                <li className='flex gap-2'>
                    <span>Phone:</span>
                    <p>{phone}</p>
                </li>
            </ul>
        </div>
    )
}

export default React.memo(UserData)