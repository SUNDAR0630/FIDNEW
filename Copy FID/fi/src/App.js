// import React, { useState } from 'react';

import { renderIntoDocument } from "react-dom/test-utils";

// import './Search.css';
// import SearchComponent from './Search';

// const App = () => {
//   const [search, setSearch] = useState('');

//   const searchFilterFunction = (text) => {
//     setSearch(text);

//   };

//   const onCancelText = () => {
//     setSearch('');
//   };

//   return (
//     <div>
   
//       <SearchComponent
//         searchFilterFunction={searchFilterFunction}
//         search={search}
//         onCancelText={onCancelText}
//         placeholder="Search"
//         customStyle="custom-container"
//       />
//     </div>
//   );
// };

// export default App;
import React from 'react'
import SearchComponent from './Search';
import ModifyEnquiry from "./ModifyEnquiry";

function App() {
  return (
    <div>
      <SearchComponent/>
      <ModifyEnquiry/>
     {/* <SearchComponent/> */}

    </div>
  )
}

export default App