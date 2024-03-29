export interface MenuItem {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
  }

  export interface Review {
    id: string;
    user: string;
    text: string;
    rating: number;
  }

  export interface Restaurant {
    id: string;
    name: string;
    menu: MenuItem[];
    reviews: Review[];
  }

  // Array type for the entire restaurants array
  export type RestaurantsArray = Restaurant[];
