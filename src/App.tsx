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
import MyThings from "./components/body/myWardrobe/myThings/MyThings";
import ViewHistory from "./components/body/myWardrobe/viewHistory/ViewHistory";
import ViewWallet from "./components/body/myWardrobe/ViewWallet";
import Settings from "./components/body/myWardrobe/Settings";
import Admin from "./components/body/myWardrobe/Admin/Admin";
import SendDialog from "./components/body/myWardrobe/dialogs/SendDialog";
import SentDialog from "./components/body/myWardrobe/dialogs/SentDialog";
import styled from "@emotion/styled";

const Root = styled.div`
min-height: 80vh;
.MuiDialog-root{
// here is material ui dialog's styles
margin-top: 277px;
padding: 25px 28px;
border: 1px solid #9696A0;
box-sizing: border-box;
background-color: rgba(0, 0, 0, 0);
box-shadow: 0 1px 4px rgba(90, 91, 106, 0.24), 0 1px 2px rgba(58, 58, 68, 0.25);
border-radius: 2px
}
`
const history = createBrowserHistory()

const App: React.FC = () => <Router history={history}>
    <Root>
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
        <Route path={ROUTES.SEND} component={SendDialog}/>
        <Route path={ROUTES.SENT} component={SentDialog}/>
    </Root>
    <Footer/>
</Router>
export default App;
