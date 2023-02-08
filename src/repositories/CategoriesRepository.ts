import { ICategoryRepository } from "../interfaces/ICategoryRepository";
import { Category } from "../models/Category"

class CategoriesRepository implements ICategoryRepository
{
    private categories : Category[];

    constructor() {
        this.categories = [];
    }
    
    find(item: Category): Promise<Category[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<Category> {
        throw new Error("Method not implemented.");
    }
    create(item: Category): Promise<Category> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: Category): Promise<Category> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}

export { CategoriesRepository }