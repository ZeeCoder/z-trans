'use strict';

module.exports = {
    defaultLocale: null,
    locale: null,
    transData: {},

    addData: function(locale, transData) {
        this.transData[locale] = transData;
    },

    addDomainData: function(locale, domain, data) {
        if (this.transData[locale] === undefined) {
            this.transData[locale] = {};
        }
        this.transData[locale][domain] = data;
    },

    trans: function(key, data, domain, locale) {
        if (locale === undefined) {
            locale = this.locale;
        }

        if (
            this.transData[locale] === undefined ||
            this.transData[locale][domain] === undefined ||
            this.transData[locale][domain][key] === undefined
        ) {
            if (
                this.transData[this.defaultLocale] !== undefined &&
                this.transData[this.defaultLocale][domain] !== undefined &&
                this.transData[this.defaultLocale][domain][key] !== undefined
            ) {
                locale = this.defaultLocale;
            } else {
                return key;
            }
        }

        if (typeof data !== 'object') {
            data = {};
        }


        var transString = this.transData[locale][domain][key];
        for (var index in data) {
            transString = transString.replace(index, data[index]);
        }

        return transString;
    }
};
