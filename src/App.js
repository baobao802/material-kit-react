// routes
import { Provider } from 'react-redux';
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import { store } from './store';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <Provider store={store}>
        <ScrollToTop />
        <GlobalStyles />
        <BaseOptionChartStyle />
        <Router />
      </Provider>
    </ThemeConfig>
  );
}
