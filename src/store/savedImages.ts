import { create } from "zustand";
import { persist } from "zustand/middleware";
import ImageType from "@/types/Image"

interface savedImagesState {
  savedImages: ImageType[]
  addSavedImage: (image: ImageType) => void
  removeSavedImage: (id: string) => void
}

const useSavedImagesStore = create(persist<savedImagesState>(
  (set) => ({
    savedImages: [],
    addSavedImage: (image: ImageType) => 
      set((state) => ({
        savedImages: [...state.savedImages, image]
      })),
    removeSavedImage: (id: string) => 
      set(state => ({
        savedImages: state.savedImages.filter(image => image.id !== id)
      }))
  }), {
    name: "saved-images"
  }
));

export default useSavedImagesStore;