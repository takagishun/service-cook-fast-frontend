import { Provider } from "react-redux";
import createStore from "redux/modules/createStore";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={createStore()}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
