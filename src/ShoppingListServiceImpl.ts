import { ShopingListDAO } from "./interfaces/ShopingListDAO";
import { ShopingListService } from "./interfaces/ShopingListService";
import { Item } from "./Item";

export default class ShopingListServiceImpl implements ShopingListService {

    constructor(private ShoppingListDAO: ShopingListDAO) { }

    async findAllItems(): Promise<Item[]> {

        return this.ShoppingListDAO.findAllItems();
    }

    async saveItems(items: Item[]): Promise<void> {

        for (const item of items) {
            item.check();
        }

        this.ShoppingListDAO.saveItems(items);
    }

}