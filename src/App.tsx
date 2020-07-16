import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import {createBrowserHistory} from "history";
import {ROUTES} from './ROUTES'
import MainPage from './components/body/mainPage/MainPage'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/body/About/About";
import FAQ from "./components/body/FAQ/FAQ";
import CustomerCare from "./components/body/customerCare/CustomerCare";
import Dialog from "./components/Dialog";
import Blog from "./components/body/blog/Blog";
import Docs from "./components/body/docs/Docs";
import AuthenticateAnItem from "./components/body/authenticateAnItem/AuthenticateAnItem";
import PrivacyPolicy from "./components/body/privacyPolicy/PrivacyPolicy";
import TermsOfService from "./components/body/termsOfService/TermsOfService";
import HowToShop from "./components/body/customerCare/HowToShop";
import ProductInfo from "./components/body/customerCare/ProductInfo";
import Payment from "./components/body/customerCare/Payment";
import Delivery from "./components/body/customerCare/Delivery";
import Returns from "./components/body/customerCare/Returns";
import SignIn from "./components/body/mainPage/dialogs/SignIn";
import CreateAccount from "./components/body/mainPage/dialogs/CreateAccount";


const history = createBrowserHistory()

const App: React.FC = () => <Router history={history}>
            <Header/>
            <Switch>
                <Route exact path={ROUTES.ROOT} component={MainPage}/>
                <Route path={ROUTES.FAQ} component={FAQ}/>
                <Route path={ROUTES.ABOUT} component={About}/>
                <Route exact path={ROUTES.BLOG} component={Blog}/>
                <Route exact path={ROUTES.DOCS} component={Docs}/>
                <Route exact path={ROUTES.PRIVACYPOLICY} component={PrivacyPolicy}/>
                <Route exact path={ROUTES.TERMSofSERVICE} component={TermsOfService}/>
                <Route exact path={ROUTES.AUTHENTICATEanITEM} component={AuthenticateAnItem}/>
                <Route path={ROUTES.HOWtoSHOP} component={HowToShop}/>
                <Route path={ROUTES.PRODUCTINFO} component={ProductInfo}/>
                <Route path={ROUTES.PAYMENT} component={Payment}/>
                <Route path={ROUTES.DELIVERY} component={Delivery}/>
                <Route path={ROUTES.RETURNS} component={Returns}/>
            </Switch>

            <Route path={ROUTES.SIGNIN} component={SignIn}/>
            <Route path={ROUTES.INSTALLMETAMASK} component={CreateAccount}/>
            <Route path="/dialog" component={() =>     <Dialog>Хуй</Dialog>   }/>
            <Footer/>
        </Router>
export default App;
