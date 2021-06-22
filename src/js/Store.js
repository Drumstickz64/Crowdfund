export default {
  /**
		a single Store object to manage the entire state of the app
	*/
  _state: {
    amountPledged: 89914,
    numOfBackers: 5007,
  },

  _events: {},

  subscribe(stateVar, callback) {
    if (!this._events[stateVar]) this._events[stateVar] = [];

    return this._events[stateVar].push(callback);
  },

  getState(stateVar) {
    return this._state[stateVar];
  },

  setState(stateVar, newValue) {
    this._state[stateVar] = newValue;

    this.executeCallbacks(stateVar, newValue);
  },

  updateState(stateVar, modifierFunc) {
    const oldValue = this.getState(stateVar);
    const newValue = modifierFunc(oldValue);

    this.setState(stateVar, newValue);
  },

  executeCallbacks(stateVar, value) {
    this._events[stateVar].forEach((callback) => {
      callback(value);
    });
  },
};
