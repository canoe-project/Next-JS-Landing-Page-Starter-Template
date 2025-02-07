import { Meta } from 'components/layout/Meta';
import { AppConfig } from 'utils/AppConfig';

// import { Banner } from './Banner';
// import { Footer } from './Footer';
// import { Hero } from './Hero';
// import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="min-h-screen antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    {/* <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer /> */}
  </div>
);

export { Base };
