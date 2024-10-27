import { BASE_URL } from "../constants";
import { IUser } from "../types/user.type";

export class UserApi {

    private static readonly URL = BASE_URL + "/users"

    public static findAll = async (): Promise<IUser[]> => {
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

    public static findById = async (id: number): Promise<IUser | null> => {
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
}