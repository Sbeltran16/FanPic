import React, { useState }from 'react'
import { Input } from 'semantic-ui-react'

export default function SearchBar(props) {
    const [postSearch, setPostSearch] = useState([]);

    function handleChange(e){
        setPostSearch(e.target.value);
    }

    function handleSearchSubmit(e){
        e.preventDefault();
        props.handleSearchSubmit(postSearch);
    }
  return (
    <>
    <Input action={{ icon: 'search' }} placeholder='Search' autoComplete="off" value={postSearch} onChange={handleChange}/>
    </>
  )
}
