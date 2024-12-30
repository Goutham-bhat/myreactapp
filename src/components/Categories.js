import React from 'react';
import './Categories.css';

function Categories({ categories, onCategoryClick }) {
    return (
        <div className="categories">
            {categories.map((category) => (
                <button
                    key={category.name}
                    className="category-button"
                    onClick={() => onCategoryClick(category.name)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
}

export default Categories;