import React, {useEffect} from "react";
// import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Navigate,
  Link,
  useRoutes,
  Routes,
} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "../src/components/GlobalStyles";
import "../src/mixins/chartjs";
import theme from "../src/theme";
import routes from "../src/routes";


import {dispatchLogin, dispatchGetUser, fetchUser} from '../src/redux/actions/authAction'
import {dispatchGetCategories, fetchCategories} from '../src/redux/actions/categoryAction'
import Login from "./components/Login/Login";
import PageNotFound from "./components/404/404";
import Home from "./components/Home/Home";
import ChangeRole from "./components/Home/ChangeRole";
import Profile from "./components/Home/Profile";
import MainLayout from "./components/MainLayout";
import Register from "./components/Register/Register";
import ActivationEmail from "./components/Register/Activation";
import ForgotPassword from "./components/Register/ForgetPassword";
import ResetPassword from "./components/Register/ResetPassword";
import CreateEvent from "./components/Event/CreateEvent";
import EventPage from "./components/Event/EventPage";
import EventDetail from "./components/Event/EventDetail";
import SpeakersContainer from "./components/Speakers/SpeakerContainer";
import SpeakersPage from "./components/Speakers/SpeakersPage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import SpeakerDetail from "./components/Speakers/SpeakerDetail";
import DashboardLayout from "./components/AdminLayout";
import CustomerListView from "./views/customer/CustomerListView";
import DashboardView from "./views/reports/DashboardView";
import AccountView from "./views/account/AccountView";
import SpeakerListView from "./views/speaker/SpeakerListView";
import UserListView from "./views/user/UserListView";
import TicketListView from "./views/ticket/TicketListView";
import CategoryListView from "./views/category/CategoryListView";
import CreateSpeaker from "./components/Speakers/CreateSpeaker";
import UpdateSpeaker from "./components/Speakers/UpdateSpeaker";
import UpdateEvent from "./components/Event/UpdateEvent";
import SponsorsPage from "./components/Sponsors/SponsorsPage";
import SponsorDetail from "./components/Sponsors/SponsorDetail";
import CreateSponsor from "./components/Sponsors/CreateSponsor";
import UpdateSponsor from "./components/Sponsors/UpdateSponsor";
import CreateCategory from "./components/Category/CreateCategory";
import UpdateCategory from "./components/Category/UpdateCategory";
import SponsorListView from "./views/sponsor/SponsorListView";
import CreateTicket from "./components/Ticket/CreateTicket";
import UpdateTicket from "./components/Ticket/UpdateTicket";
import CartDetail from "./components/Cart/CartDetail"

// import DashboardLayout from "./components/AdminLayout";
function App() {
  const routing = useRoutes(routes);
  const dispatch = useDispatch();
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('https://event-management-hcmute.herokuapp.com/api/users/refresh_token', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
  
    }
  },[token, dispatch])

  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Routes>
          <Route path="/" element={<MainLayout/>} >
            <Route path="/" element={<Home/>} />,
            <Route path="home" element={<Navigate to="/"/>} />,
            <Route path="cart" element={<CartDetail/>} />,
            <Route path="profile" element={<Profile/>} />,
            <Route path="/profile/reset" element={<ResetPassword/>} />,
            <Route path="login" element={ auth.isLogged ? <PageNotFound/>: <Login/>} />
            <Route path="register" element={ auth.isLogged ? <PageNotFound/> : <Register/>} />,
            <Route path="user" element={<ActivationEmail/>} />,
            <Route path="/forget" element={<ForgotPassword/>} />,
            <Route path="/events" element={<EventPage/>} />,
            <Route path="/events/:id" element={<EventDetail/>} />,
            <Route path="/speakers" element={<SpeakersPage/>} />,
            <Route path="/speakers/:id" element={<SpeakerDetail/>} />,
            <Route path="sponsors" element={<SponsorsPage/>}/>,
            <Route path="sponsors/:id" element={<SponsorDetail/>}/>,
            <Route path="/about" element={<About/>} />,
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<PageNotFound/>} />
          </Route>
          <Route path="/dashboard" element={auth.isAdmin ? <DashboardLayout/> : <PageNotFound/>}> 
          {/* auth.isAdmin ? <DashboardLayout/> : <Navigate to="/"/> */}
            <Route path="/" element={<DashboardView/>} />,
            <Route path="/events" element={<CustomerListView/>}/>
            <Route path="/events/create" element={<CreateEvent/>}/>
            <Route path="/events/:id" element={<UpdateEvent/>}/>
            <Route path="/speakers" element={<SpeakerListView/>}/>
            <Route path="/speakers/create" element={<CreateSpeaker/>}/>,
            <Route path="/speakers/:id" element={<UpdateSpeaker/>}/>,
            <Route path="/sponsors" element={<SponsorListView/>}/>,
            <Route path="/sponsors/create" element={<CreateSponsor/>}/>,
            <Route path="/sponsors/:id" element={<UpdateSponsor/>}/>,
            <Route path="/categories" element={<CategoryListView/>}/>,
            <Route path="/categories/create" element={<CreateCategory/>}/>,
            <Route path="/categories/:id" element={<UpdateCategory/>}/>,
            <Route path="/tickets" element={<TicketListView/>}/>
            <Route path="/tickets/create" element={<CreateTicket/>}/>,
            <Route path="/tickets/:id" element={<UpdateTicket/>}/>,
            <Route path="/users" element={<UserListView/>}/>,
            <Route path="/users/:id" element={<ChangeRole/>}/>
          </Route>
          <Route path="user" element={<MainLayout/>} >
            <Route path="/activate/:activation_token" element={ auth.isLogged ? <PageNotFound/> : <ActivationEmail/>} />,
            <Route path="/reset/:token" element={ auth.isLogged ? <PageNotFound/> : <ResetPassword />}/>
          </Route>
          {/* <Route path="/tickets/:id" element={<UpdateTicket/>} >
            <Route path="/create" element={<CreateEvent/>}/>
          </Route> */}
        </Routes>
    </ThemeProvider>
  );
}
export default App;
