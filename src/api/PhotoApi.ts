import { BASE_URL } from "../constants";
import { IPhoto } from "../types/photo.type";

export class PhotoApi {

    private static readonly URL = BASE_URL + "/photos"

    public static findAll = async (): Promise<IPhoto[]> => {
        try {
            const response = await fetch(this.URL);
            if (!response.ok) {
                throw new Error('Failed to fetch photos');
            }
            return response.json();
        } catch (error) {
            console.error('Error fetching photos:', error);
            return [];
        }
    }

    public static findById = async (id: number): Promise<IPhoto | null> => {
        try {
            const response = await fetch(`${this.URL}/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch photo');
            }
            return response.json();
        } catch (error) {
            console.error('Error fetching photo:', error);
            return null;
        }
    }

    public static findByAlbumId = async (albumId: number): Promise<IPhoto[]> => {
        try {
            const response = await fetch(`${this.URL}?albumId=${albumId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch photos');
            }
            return response.json();
        } catch (error) {
            console.error('Error fetching photos:', error);
            return [];
        }
    }
}