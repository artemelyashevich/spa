import { BASE_URL } from "../constants";
import { IAlbum } from "../types/album.type";

export class AlbumApi {

    private static readonly URL = BASE_URL + "/albums"

    public static findAll = async (): Promise<IAlbum[]> => {
        try {
            const response = await fetch(this.URL);
            if (!response.ok) {
                throw new Error('Failed to fetch albums');
            }
            return response.json();
        } catch (error) {
            console.error('Error fetching albums:', error);
            return [];
        }
    }

    public static findById = async (id: number): Promise<IAlbum | null> => {
        try {
            const response = await fetch(`${this.URL}/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch albums');
            }
            return response.json();
        } catch (error) {
            console.error('Error fetching albums:', error);
            return null;
        }
    }

    public static findByUserId = async (userId: number): Promise<IAlbum[]> => {
        try {
            const response = await fetch(`${this.URL}?userId=${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch albums');
            }
            return response.json();
        } catch (error) {
            console.error('Error fetching albums:', error);
            return [];
        }
    }
}