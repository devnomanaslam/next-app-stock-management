import { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleInputChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setSearchResults([]);
    try {
      if (query.trim() === '') {
        // If the query is empty, reset the search results
        setSearchResults([]);
      } else {
        const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSearchResults(data.products);
        // console.log(data.products);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateHandle = async (action, slug, initialQuantity) => {
    setIsDisabled(true)
    try {
      const response = await fetch('/api/action', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ action, slug, initialQuantity })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Assuming the response contains updated data or confirmation
      const updatedData = await response.json();
      console.log('Updated data:', updatedData);
      setIsDisabled(false)
    } catch (error) {
      console.error('Error updating data:', error);
      setIsDisabled(false)
    }
  }

  return (
    <div className="relative py-6">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
        className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      {searchResults.length > 0 && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {searchResults.map((item) => (
            <div key={item._id} className="px-4 py-3 hover:bg-gray-100 flex justify-between items-center">
              <span>{item.slug}</span>
              <div className="flex items-center">
                <button
                  className={`px-2 py-1 rounded ${isDisabled ? 'bg-gray-300' : 'bg-red-500'} text-white mr-2`}
                  onClick={() => {
                    updateHandle('minus', item.slug, item.quantity);
                  }}
                  disabled={isDisabled}
                >
                  -
                </button>
                <span className='w-6'>{item.quantity}</span>
                <button
                  className={`px-2 py-1 rounded ${isDisabled ? 'bg-gray-300' : 'bg-green-500'} text-white ml-2`}
                  onClick={() => {
                    updateHandle('plus', item.slug, item.quantity);
                  }}
                  disabled={isDisabled}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;