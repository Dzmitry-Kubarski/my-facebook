// core
import { Switch, Route, Redirect } from 'react-router-dom'

// pages
import HomePage from '../pages/HomePage'
import AuthPage from '../pages/AuthPage'
import ProfilePage from '../pages/ProfilePage';

export const useRoutes = (isAuthenticated: boolean) => {

    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/home' exact>
                    <HomePage />
                </Route>

                <Route path='/profile' exact>
                    <ProfilePage />
                </Route>

                <Redirect to='/home' />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path='/' exact>
                <AuthPage />
            </Route>

            <Redirect to='/' />
        </Switch>
    )
}
