import { create } from "zustand";
import { RecipiesSliceType, createRecipiesSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType>()(devtools((...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavoritesSlice(...a)
})))