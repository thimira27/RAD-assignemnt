import { useState } from 'react';
import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';


import NavBar from './Component/NavBar';
import StudentNavBar from './Component/C_student/StudentNavBar';
import BookNavBar from './Component/C_book/BookNavBar';
import LabNavBar from './Component/C_lab/LabNavBar';
import SubjectNavBar from './Component/C_subject/SubjectNavBar';
import TeacherNavBar from './Component/C_teacher/TeacherNavBar';


import AllStudents from './Component/C_student/AllStudents';
import AddStudent from './Component/C_student/AddStudent';
import EditStudent from './Component/C_student/EditStudent';

import AllTeachers from './Component/C_teacher/AllTeachers';
import AddTeacher from './Component/C_teacher/AddTeacher';
import EditTeacher from './Component/C_teacher/EditTeacher';

import AllSubjects from './Component/C_subject/AllSubjects';
import AddSubjects from './Component/C_subject/AddSubject';
import EditSubject from './Component/C_subject/EditSubject';


import AllLabs from './Component/C_lab/AllLabs';
import AddLab from './Component/C_lab/AddLab';
import EditLab from './Component/C_lab/EditLab';


import AllBooks from './Component/C_book/AllBooks';
import AddBook from './Component/C_book/AddBook';

import NotFound from './Component/NotFound'; 
import CodeForInterview from './Component/CodeForInterview';
import Login from './Component/account/login';
import { BrowserRouter, Routes, Route ,Navigate, Outlet} from 'react-router-dom';
import DataProvider from './context/DataProvider';
import EditBook from './Component/C_book/EditBook';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? 
    <>
      
      <Outlet />
    </> : <Navigate replace to='/account' />
};


function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);
  
  return (
    <DataProvider>
    <BrowserRouter>
      <Routes>
      <Route path='/account' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
        {/* <Route path="/register" element={<Register/>} /> */}
        <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/" element={<><NavBar/><CodeForInterview /></> } />
        </Route>
        <Route path='/students' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/students" element={<><StudentNavBar/><AllStudents /></> } />
        </Route>
        <Route path='/addStudent' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/addStudent" element={ <><StudentNavBar/><AddStudent /></> } />
        </Route>
        <Route path='/editStudent/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/editStudent/:id" element={ <><StudentNavBar/><EditStudent /></> } />
        </Route>

        <Route path='/books' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/books" element={<><BookNavBar /><AllBooks /></>} />
        </Route>
        <Route path='/addBook' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/addBook" element={<><BookNavBar /><AddBook /></>} />
        </Route>
        <Route path='/editBook/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/editBook/:id" element={ <><BookNavBar /><EditBook /></> } />
        </Route>

        
        <Route path='/teachers' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/teachers" element={<><TeacherNavBar /><AllTeachers/></>} />
        </Route>
        <Route path='/addteachers' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/addteachers" element={<><TeacherNavBar /><AddTeacher/></>} />
        </Route>
        <Route path='/editTeacher/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/editTeacher/:id" element={ <><TeacherNavBar /><EditTeacher /></> } />
        </Route>
        
        <Route path='/subjects' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/subjects" element={<><SubjectNavBar /><AllSubjects /></>} />
        </Route>
        <Route path='/add_subject' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/add_subject" element={<><SubjectNavBar /><AddSubjects /></>} />
        </Route>
        <Route path='/edit_Subject/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/edit_Subject/:id" element={ <><SubjectNavBar /><EditSubject /></> } />
        </Route>

        <Route path='/lab_items' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/lab_items" element={<><LabNavBar /><AllLabs /></>} />
        </Route>
        <Route path='/addlabitems' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/addlabitems" element={<><LabNavBar /><AddLab/></>} />
        </Route>
        <Route path='/editLabItem/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/editLabItem/:id" element={ <><LabNavBar /><EditLab /></> } />
        </Route>
        
        
        <Route path='/*' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/*' element={<NotFound />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
