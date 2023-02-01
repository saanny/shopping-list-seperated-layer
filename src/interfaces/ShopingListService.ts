import { Item } from "../Item";

export interface ShopingListService {
    findAllItems(): Promise<Array<Item>>;
    saveItems(items: Array<Item>): Promise<void>;
}