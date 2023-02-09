import { container } from 'tsyringe';
import { ICategoriesRepository } from "../interfaces/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
    'CategoriesRepository',
    CategoriesRepository,
);