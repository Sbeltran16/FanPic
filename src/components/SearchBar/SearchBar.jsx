import React, { useRef, }from 'react'
import { Input } from 'semantic-ui-react'

export default function SearchBar() {
    // const query = useRef();

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     const queryVal = query.current.val;
    // }

  return (
    <>
    <Input action={{ icon: 'users' }} placeholder='Search for users'/>
    </>
  )
}
