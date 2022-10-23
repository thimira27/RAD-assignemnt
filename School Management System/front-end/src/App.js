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
import AllTeachers from './Component/C_teacher/AllTeachers';
import AllSubjects from './Component/C_subject/AllSubjects';
import AllLabs from './Component/C_lab/AllLabs';
import AllBooks from './Component/C_book/AllBooks';
import NotFound from './Component/NotFound'; 
import CodeForInterview from './Component/CodeForInterview';
import Login from './Component/account/login';
import { BrowserRouter, Routes, Route ,Navigate, Outlet} from 'react-router-dom';
import DataProvider from './context/DataProvider';

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
            <Route path="/" element={<NavBar/> } />
            <Route path="/" element={<CodeForInterview /> } />
        </Route>
        <Route path='/students' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/students" element={<StudentNavBar/> } />
            <Route path="/students" element={<AllStudents /> } />
        </Route>
        <Route path='/teachers' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/teachers" element={<TeacherNavBar />} />
            <Route path="/teachers" element={<AllTeachers /> } />
        </Route>
        <Route path='/subjects' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/subjects" element={<SubjectNavBar />} />
            <Route path="/subjects" element={<AllSubjects /> } />
        </Route>
        <Route path='/labs' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/labs" element={<LabNavBar />} />
            <Route path="/labs" element={<AllLabs /> } />
        </Route>
        <Route path='/books' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path="/books" element={<BookNavBar />} />
            <Route path="/books" element={<AllBooks /> } />
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
