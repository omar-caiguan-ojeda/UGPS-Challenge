const API_KEY = import.meta.env.VITE_RAWG_API_KEY || "5e8b5c51f070483db815485502ff0a48"; // Usar variable de entorno

interface Filters {
  search?: string;
  year?: string;
  genre?: string;
  platform?: string;
  tag?: string;
  developer?: string;
  ordering?: string;
  dates?: string;
  genres?: string;
  platforms?: string;
  tags?: string;
}

/**
 * Fetches a list of games from the RAWG API based on filters and pagination.
 * @param filters - Optional filters to apply to the game query.
 * @param page - The page number to fetch (default: 1).
 * @param pageSize - Number of games per page (default: 20).
 * @returns An object containing game results, total count, and pagination links.
 */
export const fetchGames = async (filters: Filters = {}, page: number = 1, pageSize: number = 20) => {
  const params = new URLSearchParams({
    key: API_KEY,
    page: page.toString(),
    page_size: pageSize.toString(),
    ...(filters.search && { search: filters.search }),
    ...(filters.year && { dates: `${filters.year}-01-01,${filters.year}-12-31` }),
    ...(filters.genre && { genres: filters.genre }),
    ...(filters.platform && { platforms: filters.platform }),
    ...(filters.tag && { tags: filters.tag }),
    ...(filters.developer && { developers: filters.developer }),
    ...(filters.ordering && { ordering: filters.ordering }),
    ...(filters.dates && { dates: filters.dates }),
    ...(filters.genres && { genres: filters.genres }),
    ...(filters.platforms && { platforms: filters.platforms }),
    ...(filters.tags && { tags: filters.tags }),
  });

  const response = await fetch(`https://api.rawg.io/api/games?${params.toString()}`);
  const data = await response.json();
  return {
    results: data.results || [],
    count: data.count || 0,
    next: data.next,
    previous: data.previous,
  };
};

/**
 * Fetches detailed information for a specific game by ID.
 * @param id - The ID of the game to fetch.
 * @returns The detailed game data from the RAWG API.
 */
export const fetchGameDetails = async (id: string) => {
  const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
  return response.json();
};