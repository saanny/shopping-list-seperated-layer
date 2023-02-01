import { ShopingListService } from '../../interfaces/ShopingListService';
import { Item } from '../../Item';
import { NullNameValidationError } from '../../error/NullNameValidationError';
import { QuantityValidationError } from '../../error/QuantityValidationError'
import ShopingListServiceImpl from '../../ShoppingListServiceImpl'
import { ShopingListDAOImpl } from '../../ShoppingListDAOImpl';
import { ShopingListDAO } from '../../interfaces/ShopingListDAO';

let ShopingListService: ShopingListService;
let Items: Array<Item> = [];

describe('Item', () => {

    beforeAll(() => {
        const ShoppingListDAO: ShopingListDAO = new ShopingListDAOImpl();
        ShopingListService = new ShopingListServiceImpl(ShoppingListDAO);
    });

    afterEach(() => {
        Items = [];
    });

    test('should check if item names are not null or empty', async () => {

        Items.push(new Item("Carrot", 5));
        Items.push(new Item("Orange", 2));

        expect(() => ShopingListService.saveItems(Items)).not.toThrow(Error);

    });

    test('should check if item names are null or empty', async () => {
        Items.push(new Item("Carrot", 5));
        Items.push(new Item("", 2));

        expect(() => ShopingListService.saveItems(Items)).toThrow(new NullNameValidationError("Name must must be provided"));

    });

    test("should throw item quantity exception when item has a quantity less than 1", () => {

        Items.push(new Item("Carrot", 5));
        Items.push(new Item("Bnana", 0));
        expect(() => ShopingListService.saveItems(Items)).toThrow(new QuantityValidationError("Quantity must be more than zero and greather than 100"));
    });

    test("should throw item quantity exception when item has a quantity greather than 100", () => {

        Items.push(new Item("Carrot", 20));
        Items.push(new Item("Bnana", 101));

        expect(() => ShopingListService.saveItems(Items)).toThrow(new QuantityValidationError("Quantity must be more than zero and greather than 100"));
    });

});
