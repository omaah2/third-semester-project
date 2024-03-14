const fetchHospitals = async (location: string): Promise<Hospital[]> => {
  const accessToken = 'sk.eyJ1Ijoib21hYWgiLCJhIjoiY2xzbXg0bWN6MGh2NzJqcGpyNHF6dzVteSJ9.EGIop5kdomLAp47rC8phNw';
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?types=hospital&access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Parse the response data and extract hospital information
    const hospitals: Hospital[] = data.features.map((feature: any) => ({
      name: feature.text,
      address: feature.properties.address,
      coordinates: feature.center,
    }));

    return hospitals;
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    return [];
  }
};

export { fetchHospitals };

interface Hospital {
  name: string;
  address: string;
  coordinates: [number, number];
}
