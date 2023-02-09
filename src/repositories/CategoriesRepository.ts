import { ICategoriesRepository } from "../interfaces/repositories/ICategoriesRepository";
import { Category } from "../models/Category"

class CategoriesRepository implements ICategoriesRepository
{
    private categories : Category[];

    constructor() {
        this.categories = [];
    }

    find(data: Category): Category[] {
        throw new Error("Method not implemented.");
    }

    findOne(id: string): Category {
        throw new Error("Method not implemented.");
    }

    create(data: Category): Category {
      this.categories.push(data);
      return data;
    }

    update(data: Category): Category {
        throw new Error("Method not implemented.");
    }

    delete(data: Category): boolean {
        throw new Error("Method not implemented.");
    }
}

export { CategoriesRepository }