interface SearchBarProps {
    onSearch: (query: string) => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    return (
      <div className="flex justify-center mt-4">
        <input 
          type="text" 
          className="border rounded p-2 w-1/2" 
          placeholder="Search recipes..." 
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button 
          className="bg-blue-500 text-white p-2 ml-2" 
          onClick={() => onSearch(query)}>Search</button>
      </div>
    );
  };
  