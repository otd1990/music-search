async function searchTracks(query) {
  try {
    const response = await fetch(
      `http://localhost:5000/api/search?query=${query}`
    );
    const { data } = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching tracks:", error);
    throw new Error("Failed to fetch tracks");
  }
}

export { searchTracks };
