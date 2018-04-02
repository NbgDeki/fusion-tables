class PopupWidget {
  static get TIME_OUT () {
    return 5;
  }

  static init (fn) {
    const completed = window.sessionStorage.getItem('completed');
    // Widget has ran, don't show message again.
    if (completed) {
      return;
    }

    this.instance = new PopupWidget(fn);
  }

  constructor (fn) {
    this.callback = fn;

    const sessionTime = window.sessionStorage.getItem('currentTime') || 0;
    this._currentTime = parseInt(sessionTime);
    
    this._runTimer = this._runTimer.bind(this);
    this._onBeforeUnload = this._onBeforeUnload.bind(this);

    window.addEventListener('beforeunload', this._onBeforeUnload);
    this._runTimer();
  }

  _runTimer () {
    this._interval = setInterval(() => {
      this._currentTime += 1;

      if (this._currentTime > PopupWidget.TIME_OUT) {
        this.callback();

        this._disconnect();
      }
    }, 1000);
  }

  _onBeforeUnload (evt) {
    if (this._currentTime < PopupWidget.TIME_OUT) {
      window.sessionStorage.setItem('currentTime', this._currentTime);
    }

    clearInterval(this._interval);
  }

  _disconnect () {
    clearInterval(this._interval);
    window.sessionStorage.setItem('completed', true);
    window.removeEventListener('beforeunload', this._onBeforeUnload);
    window.sessionStorage.removeItem('currentTime');
  }
}

export default PopupWidget;