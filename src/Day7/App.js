<BrowserRouter>
     {/* <ul>
         <li>
             <Link to='/Home'>home</Link>
         </li>
     </ul>
     <ul>
      <li>
        <Link to='/About'>About</Link>
      </li>
     </ul> */}
     <Navbar/>
     <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
     </Routes>
     </BrowserRouter>