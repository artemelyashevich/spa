import React from 'react'
import { IUser } from '../../types/user.type'
import { Link } from 'react-router-dom'

interface IProps {
    user: IUser
}

const UserCard: React.FC<IProps> = ({ user }) => {
    return (
        <div className="mb-1">
            <Link
                className="hover:text-blue-700 hover:underline"
                to={`/users/${user.id}`}
            >
                {user.name}
            </Link>
        </div>
    )
}

export default React.memo(UserCard)