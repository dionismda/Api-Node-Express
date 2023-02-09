import { ICategoriesService } from "../interfaces/services/ICategoriesService";
import { Category } from "../models/Category";
import { injectable, inject } from 'tsyringe';
import { ICategoriesRepository } from "../interfaces/repositories/ICategoriesRepository";

@injectable()
class CategoriesService implements ICategoriesService
{
    private categoriesRepository: ICategoriesRepository;

    constructor(@inject('CategoriesRepository') categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }    

    create(item: Category): Category {
        return this.categoriesRepository.create(item);
    }

    update(id: string, item: Category): Category {
        throw new Error("Method not implemented.");
    }

    delete(id: string): boolean {
        throw new Error("Method not implemented.");
    }

}

export { CategoriesService }