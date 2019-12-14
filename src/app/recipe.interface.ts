export interface Recipe {

    Id: string;
    Name: string;
    Url: string;
    RecipeYield: string;
    Description: string;
    Extra: string;
    PrepTime: string;
    CookTime: string;
    TotalTime: string;
    Keywords: string;
    Pinned: string;
    Viewed: string;
    CarbohydrateContent: string;
    CholesterolContent: string;
    FatConten: string;
    FiberContent: string;
    ProteinContent: string;
    SaturatedFatContent: string;
    ServingSize: string;
    SodiumContent: string;
    SugarContent: string;
    TransFatContent: string;
    UnsaturatedFatConten: string;
    Calories: string;
    ingredients: Title[];
    cousines: Title[];
    recipeinstructions: Title[];
    categories: Title[];
    imagerecipes: RecipeImg[];


}

export interface Title {
    Id: string;
    Title: string;
}


export interface ShortRecipe{
    Id: string;
    Name: string;
    ImgUrl:string;
}

export interface RecipeImg {
    Id: string;
    ImgUrl: string;
    Img: string;
}