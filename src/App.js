import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Redirect } from 'react-router'
import './staticUrls'
import {urls} from "./staticUrls";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    if (localStorage.token)
    { return <Home/>}
    else
    { return <Login/>}
}
export default App;
export function Login() {
    return (<div><h1>login</h1>
        <a onClick={() => {
            localStorage.token = "sadsad"
            window.open(urls.HomeUrl, "_self")
        }}>login</a></div>)
}
export function Home(){
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* our main nav bar*/}
                    <div className="btn-group">
                            <Link className="btn btn-dark" to="/">Netflix</Link>
                            <Link to="/about"className="btn btn-group-toggle">About</Link>
                            <Link to="/users"className="btn btn-dark">Users</Link>
                    </div>
                </nav>
                <Switch>
                    <Route path="/about"> {/* Page 2*/}
                    <h1>About</h1>
                    </Route>
                    <Route path="/users">
                        <h1>Users</h1> {/* Page 3*/}
                    </Route>
                    <Route path="/">
                        <h1>Main</h1> {/* our default main Page*/} {/* you can add more pages by adding new Routes */}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

