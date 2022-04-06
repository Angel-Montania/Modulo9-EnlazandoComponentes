import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import { Route, Routes } from 'react-router-dom';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <Routes>
                <Route path='/peliculas' element={<LastMovieInDb />}/>
                <Route path='/generos' element={<GenresInDb />}/>
            </Routes>

            
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            

        </div>
    )
}

export default ContentRowCenter;