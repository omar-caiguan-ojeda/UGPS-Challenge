// // src/context/FilterContext.tsx
// import { createContext, useContext, useState, ReactNode } from "react";

// interface Filters {
//   search?: string;
//   year?: string;
//   genre?: string;
//   platform?: string;
//   tag?: string;
//   developer?: string; // Para el Navbar
//   ordering?: string;
//   dates?: string;
//   genres?: string;
//   platforms?: string;
//   tags?: string;
//   developers?: string; // Para el Sidebar
// }

// interface FilterContextType {
//   filters: Filters;
//   setFilters: (filters: Filters) => void;
// }

// const FilterContext = createContext<FilterContextType | undefined>(undefined);

// export const FilterProvider = ({ children }: { children: ReactNode }) => {
//   const [filters, setFilters] = useState<Filters>({});

//   return (
//     <FilterContext.Provider value={{ filters, setFilters }}>
//       {children}
//     </FilterContext.Provider>
//   );
// };

// export const useFilters = () => {
//   const context = useContext(FilterContext);
//   if (!context) {
//     throw new Error("useFilters must be used within a FilterProvider");
//   }
//   return context;
// };



// src/context/FilterContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

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
  developers?: string;
}

interface FilterContextType {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

/**
 * Provides a context for managing game filters across the application.
 * @param children - React components to be wrapped by the provider.
 */
export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filters>({});

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

/**
 * Hook to access and modify the filter context.
 * @returns The filter context with current filters and setter function.
 * @throws Error if used outside a FilterProvider.
 */
export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};