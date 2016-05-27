(() => {
  "use strict";

  class KwcDurationFormat {
    beforeRegister() {
      this.is = "kwc-duration-format";

      this.properties = {
        duration: {
          type: String,
          value: null
        },

        locale: {
          type: String,
          value: null
        },

        _i18nLocale: {
          type: String,
          readOnly: true,
          value: null
        },

        output: {
          type: String,
          reflectToAttribute: true,
          readOnly: true,
          notify: true,
          computed: "_computeOutput(duration, locale, _i18nLocale)"
        }
      };
    }

    attached() {
      const that = this;
      const i18next = window.i18next;
      if (i18next) {
        that._set_i18nLocale(i18next.language);
        i18next.on("initialized", () => that._set_i18nLocale(i18next.language));
        i18next.on("loaded", () => that._set_i18nLocale(i18next.language));
        i18next.on("languageChanged", () => that._set_i18nLocale(i18next.language));
      }
    }

    _computeOutput(duration, locale, _i18nLocale) {
      let momentDuration;
      if (duration) {
        momentDuration = moment.duration(duration);
      } else {
        momentDuration = moment.duration(0);
      }

      if (locale) {
        momentDuration.locale(locale);
      } else if (_i18nLocale) {
        momentDuration.locale(_i18nLocale);
      }

      return momentDuration.humanize();
    }
  }

  Polymer(KwcDurationFormat);
})();