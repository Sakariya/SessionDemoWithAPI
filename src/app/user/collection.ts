import { User } from "./user";

export interface Collection<T> {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}
