(() => {
  "use strict";

  class KwcDateFormat {
    beforeRegister() {
      this.is = "kwc-date-format";

      this.properties = {
        date: {
          type: String,
          value: null
        },

        inputFormat: {
          type: String,
          value: null
        },

        format: {
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
          computed: "_computeOutput(date, inputFormat, format, locale, _i18nLocale)"
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

    _computeOutput(date, inputFormat, format, locale, _i18nLocale) {
      var datetime;
      if (date) {
        if (inputFormat) {
          datetime = moment(date, inputFormat);
        } else {
          datetime = moment(date);
        }
      } else {
        datetime = moment();
      }

      if (locale) {
        datetime.locale(locale);
      } else if (_i18nLocale) {
        datetime.locale(_i18nLocale);
      }

      return datetime.format(format);
    }
  }

  Polymer(KwcDateFormat);
})();