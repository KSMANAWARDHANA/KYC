import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup.js'
import VerifyMail from './pages/VerifyEmail.js'
import Dashboard from './pages/DashboardOne';
import './App.css';
// Tailwind CSS Style Sheet
//import './assets/styles/tailwind.css';
import FileUpload from './pages/ProfileImgUpload/ImageUpload';
import VerifyMobile from './pages/VerifyMobile';
import ImageByte from './pages/ImageByte';
import Example from './pages/reactLifeCycles';
import ImageUpload from './pages/ImgTest';

function App() {
    return (
        <div className=" ">
            
            <div className="bg-indigo-100">
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={Signup} />
                    <Route exact path="/verifyemail/:email/:hash" component={VerifyMail}/>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/upload" component={FileUpload} />
                    <Route exact path="/verifymobile" component={VerifyMobile} />
                    {/* <Route exact path="/country" component={Country} /> */}
                    <Route exact path="/image" component={ImageByte} />
                    <Route exact path="/hooks" component={Example} />
                    <Route exact path="/imgUpload" component={ImageUpload} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </div>
    );
}
export default App;
