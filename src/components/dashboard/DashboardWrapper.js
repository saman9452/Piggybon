import React, { Suspense } from 'react';
import { Redirect } from 'react-router-dom';

const LazyDashboard = React.lazy(() => import('./Dashboard'));

const DashboardContainer = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyDashboard />
    </Suspense>
  );
};

export default DashboardContainer;