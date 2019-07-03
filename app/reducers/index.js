/**
 * Created by ILeaf solutions
 * on July 03, 2019
 * Reducers - Combines all the existing reducers.
 */

import * as loginReducer from "./loginReducer";
import * as loadingReducer from "./loadingReducer";

export default Object.assign(loginReducer, loadingReducer);
