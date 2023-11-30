import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router, Route ,Routes} from "react-router-dom"; 

import CreateNote from "./CreateNote";
import NotesDetail from "./NotesDetails";
import UpdateNote from "./UpdateNotes";
import NoteList from "./NoteList";


function App() {
    return (
        <div>
            <Header />

            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<NoteList />} />
                        <Route path="/create-note" element={<CreateNote />} />
                        <Route path="/edit-note/:id" element={<NotesDetail />} />
                        <Route path="/show-note/:id/" element={<UpdateNote />} />
                    </Routes>
                </div>
         </Router>
            <Footer />
        </div>
    );

    }

export default App;