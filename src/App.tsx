import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import {createBrowserHistory} from "history";
import {ROUTES} from './ROUTES'
import MainPage from './components/body/mainPage/MainPage'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/body/topMenu/About/About";
import FAQ from "./components/body/topMenu/FAQ/FAQ";
import Blog from "./components/body/topMenu/blog/Blog";
import Docs from "./components/body/topMenu/docs/Docs";
import AuthenticateAnItem from "./components/body/buttomMenu/authenticateAnItem/AuthenticateAnItem";
import PrivacyPolicy from "./components/body/buttomMenu/privacyPolicy/PrivacyPolicy";
import TermsOfService from "./components/body/buttomMenu/termsOfService/TermsOfService";
import HowToShop from "./components/body/buttomMenu/customerCare/HowToShop";
import ProductInfo from "./components/body/buttomMenu/customerCare/ProductInfo";
import Payment from "./components/body/buttomMenu/customerCare/Payment";
import Delivery from "./components/body/buttomMenu/customerCare/Delivery";
import Returns from "./components/body/buttomMenu/customerCare/Returns";
import SignIn from "./components/body/mainPage/dialogs/SignIn";
import CreateAccount from "./components/body/mainPage/dialogs/CreateAccount";
import GoodCard from "./components/body/mainPage/dialogs/GoodCard";
import MyThings from "./components/body/myWardrobe/myThings/MyThings";
import ViewHistory from "./components/body/myWardrobe/viewHistory/ViewHistory";
import ViewWallet from "./components/body/myWardrobe/ViewWallet";
import Settings from "./components/body/myWardrobe/Settings";
import Admin from "./components/body/myWardrobe/Admin/Admin";
import Send from "./components/body/myWardrobe/dialogs/Send";
import Sent from "./components/body/myWardrobe/dialogs/Sent";


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

                <Route path={ROUTES.MYTHINGS} component={MyThings}/>
                <Route path={ROUTES.VIEWHISTORY} component={ViewHistory}/>
                <Route path={ROUTES.VIEWWALLET} component={ViewWallet}/>
                <Route path={ROUTES.SETTINGS} component={Settings}/>
                <Route path={ROUTES.ADMIN} component={Admin}/>
            </Switch>

            <Route path={ROUTES.SIGNIN} component={SignIn}/>
            <Route path={ROUTES.INSTALLMETAMASK} component={CreateAccount}/>
            <Route path={ROUTES.BUY} component={GoodCard}/>
            <Route path={ROUTES.SEND} component={Send}/>
            <Route path={ROUTES.SENT} component={Sent}/>

            <Footer/>
        </Router>
export default App;
