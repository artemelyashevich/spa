import { AlbumApi } from "../api/AlbumApi";
import { UserApi } from "../api/UserApi";
import { IUser } from "../types/user.type";

// @ts-ignore
export const userLoader = async ({ params: { id } }) => {
    const user = await UserApi.findById(id)
    const albums = await AlbumApi.findByUserId(id)
    return { user, albums }
}

export const usersLoader = async (): Promise<{ users: IUser[] }> => {
    const users = await UserApi.findAll()
    return { users }
}