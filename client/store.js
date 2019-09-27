import configureStore from '_store/configureStore';
import history from '_client/history';

const store = configureStore(history);

export default store;
