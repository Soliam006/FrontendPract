import { motion } from "framer-motion";
import PlateCard from "./PlateCard.jsx";
import React from 'react';

const PlateList = ({ dishes, activeTab }) => {
    const filteredDishes = dishes.filter(dish => dish.category === activeTab);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-16">
            {filteredDishes.map(dish => (
                <motion.div
                    key={dish.dishName}
                    initial={{ opacity: 0, x: 50 }} // Posición inicial de la animación
                    animate={{ opacity: 1, x: 0 }} // Posición final de la animación
                    transition={{ duration: 0.5 }} // Duración de la animación
                >
                    <PlateCard
                        imgSrc={dish.imgSrc}
                        dishName={dish.dishName}
                        dishDescription={dish.dishDescription}
                        price={dish.price}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default PlateList;