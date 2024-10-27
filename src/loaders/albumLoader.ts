import { AlbumApi } from "../api/AlbumApi"
import { PhotoApi } from "../api/PhotoApi"
import { UserApi } from "../api/UserApi"

// @ts-ignore
export const albumLoader = async ({ params: { id } }) => {
    const album = await AlbumApi.findById(id)
    const photos = await PhotoApi.findByAlbumId(id)
    const users = await UserApi.findAll()
    return { album, photos, users }
}

export const albumsLoader = async () => {
    const albums = await AlbumApi.findAll()
    return { albums }
}