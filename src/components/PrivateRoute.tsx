import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useObserver } from 'mobx-react';
import {useStores} from "../hooks/use-stores";

interface IProps extends RouteProps {
}

const PrivateRoute: React.FC<IProps> = ({children, ...rest}) => {
    const {accountStore} = useStores();
    return useObserver(() => <Route
        {...rest}
        render={({location}) =>
            accountStore.rootStore.privateInitialized
                ? children
                : <Redirect to={{pathname: "/login", state: {from: location}}}/>
        }
    />);
};
export default PrivateRoute;
