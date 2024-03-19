import { LayoutComponent } from "./components/layout/component";
import { restaurants } from "../materials/mock";
import { Restaurant } from "../materials/types";
import { RestaurantComponent } from "./components/restaurant/component";

export const App: React.FC = () => {
    return (
        <LayoutComponent>
            {restaurants.map((restaurant: Restaurant) => {
                return <RestaurantComponent restaurant={restaurant} />;
            })}
        </LayoutComponent>
    );
};

