import {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';
import { RequireAuth } from './RequireAutn';

export const AppRouter = memo(() => {
    const renderWIthWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={(<PageLoader />)}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (

        <Routes>
            {Object.values(routeConfig).map(renderWIthWrapper)}
        </Routes>

    );
});
