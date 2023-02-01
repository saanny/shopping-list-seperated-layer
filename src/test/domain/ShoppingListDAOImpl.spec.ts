import { Client } from 'pg'
let client: Client;

describe('ShoppingListDAOImpl', () => {
    beforeAll(() => {
        client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'Basket',
            password: 'admin',
            port: 5432,
        });
        client.connect();
    });

    afterAll(() => {
        client.end();
    });

    test("should insert and read and delete an item in database", async () => {
        try {
            const insertQuery = await client.query("INSERT INTO item(name, quantity) VALUES($1, $2)", ["orange", 10])
            const selectQuery = await client.query("SELECT * FROM item ORDER BY id DESC limit 1")

            for (const item of selectQuery.rows) {

                expect(item.name.trim()).toEqual("orange");
                expect(parseInt(item.quantity)).toEqual(10);
            }

            const deleteQuery = await client.query("DELETE FROM item WHERE ID=(SELECT MAX(id) FROM item)");

        } catch (error: any) {
            console.log(error.stack)
        }
    })

});