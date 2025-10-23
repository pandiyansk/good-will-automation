import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import Icon from '../components/Icon';

const PROJECT_CATEGORIES_GALLERY = ['All Projects', 'Factory Automation', 'Energy Solutions', 'Control Panels', 'Installations'];

const Gallery: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All Projects');
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(PROJECTS);

    const handleFilter = (category: string) => {
        setActiveCategory(category);
        if (category === 'All Projects') {
            setFilteredProjects(PROJECTS);
        } else {
            setFilteredProjects(PROJECTS.filter(p => p.category === category));
        }
    };

    return (
        <div>
            {/* Header Section */}
            <section className="bg-brand-bg-light py-16 md:py-24 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Project Gallery</h1>
                    <p className="max-w-3xl mx-auto text-brand-text-light">
                        Discover our successful automation and energy solution projects across diverse industries. Each project showcases our commitment to excellence and innovation.
                    </p>
                </div>
            </section>

            {/* Filters and Gallery */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    {/* Filter Buttons */}
                    <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                        {PROJECT_CATEGORIES_GALLERY.map(category => (
                            <button
                                key={category}
                                onClick={() => handleFilter(category)}
                                className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                    activeCategory === category
                                        ? 'bg-brand-blue text-white shadow-md'
                                        : 'bg-white text-brand-text-light hover:bg-gray-200 border border-gray-200'
                                }`}
                                aria-pressed={activeCategory === category}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-brand-text-light mb-3 space-x-4">
                                        <span className="flex items-center">
                                            <Icon name="calendar" className="w-4 h-4 mr-2" />
                                            {project.year}
                                        </span>
                                        <span className="flex items-center">
                                            <Icon name="mapPin" className="w-4 h-4 mr-2" />
                                            {project.location}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-brand-text-light text-sm mb-4 min-h-[60px]">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
