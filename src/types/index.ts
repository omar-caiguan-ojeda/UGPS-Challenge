// src/types/index.ts
export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number | null;
    released: string;
    genres: { id: number; name: string }[];
    platforms: { platform: { id: number; name: string } }[];
    developers: { id: number; name: string }[];
    tags: { id: number; name: string }[];
    description_raw?: string;
    short_screenshots?: { id: number; image: string }[];
  }
  
  export interface ApiResponse {
    results: Game[];
  }