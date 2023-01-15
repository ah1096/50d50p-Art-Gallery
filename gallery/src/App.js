import './App.css';
import LandingPage from './LandingPage.js'
import Exhibits from './Exhibits.js'
import Navigate from './Navigate.js'
// import ArtDecoHome from './ArtDecoHome.js'
// import ArtNouveauHome from './ArtNouveauHome.js'
import { useState } from 'react';


function App() {
  const [page, setPage] = useState('landing')

    return (
        <div>
            <Navigate pages={setPage}/>
                {page === 'landing' && <LandingPage />}
                {page === 'exhibits' && <Exhibits />}
                {/* {page === 'ADhome' && <ArtDecoHome />}
                {page === 'ANhome' && <ArtNouveauHome />} */}
    
        </div>

    );
}

export default App;
