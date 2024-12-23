import { useState } from 'react'
import { Search } from 'react-bootstrap-icons';
import '../styles/components/Searchbar.css';
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
    <div id='header-search' >
       <form>
          <input
              className='p-29'
            type="search"
            placeholder="Search catagories.."
              onChange={handleChange}
              
            name={search}
        />
        <button type="submit" onClick={handleSearch}><Search/></button>
      </form>
        
    </div>
  )
}

export default Searchbar

