import { Restaurant } from '../../../materials/types.ts';


export const RestaurantComponent: React.FC<{restaurant: Restaurant}> = ({restaurant}) => {
    return (
        <div>
            <h3>{restaurant.name}</h3>
        </div>
    );
};