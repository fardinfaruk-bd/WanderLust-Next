export const getDestinations = async () => {
    const res = await fetch('http://localhost:5000/destinations');
    const destinations = await res.json();
    return destinations;
};

export const getDestinationById = async (id) => {
    const res = await fetch(`http://localhost:5000/destinations/${id}`);
    const destination = await res.json();
    return destination;
};