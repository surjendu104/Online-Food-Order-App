export class Foods {
    id!: number;
    price!: number;
    name!: string;
    favoriate: boolean = false;
    stars: number = 0;
    tag?: string[];
    imageUrl!: string;
    cookTime!: string;
    origins!: string[]
}