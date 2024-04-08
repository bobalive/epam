export const carModels = {
    "Toyota": ["Camry", "Corolla", "Rav4", "Prius"],
    "Honda": ["Civic", "Accord", "CR-V", "Pilot"],
    "Ford": ["F-150", "Mustang", "Escape", "Explorer"],
    "Chevrolet": ["Silverado", "Equinox", "Tahoe", "Camaro"],
    "Nissan": ["Altima", "Sentra", "Rogue", "Pathfinder"],
    "BMW": ["3 Series", "5 Series", "X5", "i3"],
    "Mercedes-Benz": ["C-Class", "E-Class", "GLC", "S-Class"],
    "Audi": ["A4", "Q5", "A6", "Q7"],
    "Tesla": ["Model S", "Model 3", "Model X", "Model Y"],
    "Hyundai": ["Elantra", "Sonata", "Tucson", "Santa Fe"]
};
export const carBrands: (keyof typeof carModels)[] = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Nissan",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Tesla",
    "Hyundai"
];