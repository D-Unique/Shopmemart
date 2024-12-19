import { useState } from 'react'
function Searchbar() {
    const [search, setSearch] = useState<string>('');
    function handleSearch(e: any) {
        setSearch(e.target.value);
        console.log(search);
        e.target.value = '';
    }
    function handleChange(e: any) {
        setSearch(e.target.value);
    }

  return (
    <div >
       
          <input
              className='p-29'
            type="text"
            placeholder="Search catagories.."
              onChange={handleChange}
              
            name={search}
        />
        <button type="submit" onClick={handleSearch}>Submit</button>
        
    </div>
  )
}

export default Searchbar

