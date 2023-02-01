import { ShopingListDAO } from "./interfaces/ShopingListDAO";
import { Item } from "./Item";
import { Client } from "pg";

export class ShopingListDAOImpl implements ShopingListDAO {
    async findAllItems(): Promise<Item[]> {
        const items: Array<Item> = [];

        try {
            const client = new Client({
                user: 'postgres',
                host: 'localhost',
                database: 'Basket',
                password: 'admin',
                port: 5432,
            });
            client.connect();

            const selectQuery = await client.query("SELECT * FROM item ORDER BY id DESC limit 1")

            for (const item of selectQuery.rows) {
                items.push(new Item(item.trim(), parseInt(item.quantity)));
            }
        } catch (error) {
            console.log(error)
        }

        return items;
    }
    async saveItems(items: Item[]): Promise<void> {
        const client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'Basket',
            password: 'admin',
            port: 5432,
        });
        client.connect();

        try {
            const insertQuery = await client.query("INSERT INTO item(name, quantity) VALUES($1, $2)", ["orange", 10])

        } catch (error) {

        }
    }

}