import React, { memo } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { AppBar, Box, Toolbar, Button } from '@material-ui/core'

import { RoutesTypes } from 'src/types'
import routes from './routes'

const App = memo(() => {
    return (
        <Router>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        {routes.map((route: RoutesTypes) => (
                            <Button key={route.pathName} component={Link} to={route.pathName} color="inherit">
                                {route.name}
                            </Button>
                        ))}
                    </Toolbar>
                </AppBar>
            </Box>
            <div className="margin-top-appbar padding-bottom">
                <Switch>
                    {routes.map((route: RoutesTypes) => (
                        <Route key={route.pathName} path={route.pathName} exact component={route.component} />
                    ))}
                    <Redirect to="/dashboard" />
                </Switch>
            </div>
        </Router>
    )
})

App.displayName = 'App'

export default App
