import { create } from "zustand";
import { RecipesSliceType, createRecipiesSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import { NotificationSliceType, createNotificationSlice } from "./notificationSlice";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))