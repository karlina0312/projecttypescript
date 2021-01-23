import React, { Suspense, lazy, useEffect } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";

const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const UserProfilepage = lazy((): Promise<typeof import("/home/khatnaa/Desktop/project/src/app/modules/UserProfile/UserProfilePage")> =>
  import("./modules/UserProfile/UserProfilePage")
);

export default function BasePage(): JSX.Element {
  useEffect(() => {
     console.log('Base page');
  }, []) // [] - is required if you need only one call

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          <Redirect exact from="/" to="/dashboard" />
        }
        <Route path='/dashboard' component={DashboardPage}  />
        <Route path='my-page' component={MyPage}/>
        {/* <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/my-page" component={MyPage} /> */}
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Route path="/error" component={ErrorsPage} />
      </Switch>
    </Suspense>
  );
}
