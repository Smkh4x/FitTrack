import { create } from 'zustand';

const useSportStore = create((set) => ({
  sports: [],
  favorites: [],
  loading: false,
  error: null,

  fetchSports: async () => {
    try {
      const response = await fetch('https://api.example.com/sports');
      const data = await response.json();
      set({ sports: data });
    } catch (err) {
        console.log(err, "error = err.message, loading = false")
    }
  },

  toggleFavorite: (sportId: any) => set((state) => {
    const exists = state.favorites.includes(sportId);
    return {
      favorites: exists
        ? state.favorites.filter(id => id !== sportId)
        : [...state.favorites, sportId],
    };
  }),
}));

export default useSportStore;

function SportList() {
  const { sports, loading, error, fetchSports } = useSportStore();

  useEffect(() => {
    fetchSports();
  }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;
  return <FlatList data={sports} renderItem={...} />;
}