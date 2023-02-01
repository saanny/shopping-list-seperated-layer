import { Item } from "../Item";

export interface ShopingListDAO {
    findAllItems(): Promise<Array<Item>>;
    saveItems(items: Array<Item>): Promise<void>;
} 