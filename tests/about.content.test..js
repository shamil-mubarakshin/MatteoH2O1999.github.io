import { describe, test, expect } from '@jest/globals';
import fs from 'fs';
import defaults from '../nuxt.config'

const locales = getLocales();

function getLocales() {
    let localeObject = defaults.i18n.locales;
    let localeList = [];
    localeObject.forEach(element => {
        localeList.push(element.code);
    })
    return localeList;
}

describe('About page', () => {
    const folderPath = './content/about';

    test.each(locales)('is written for locale %s', (locale) => {
        const aboutPage = folderPath + '/' + locale + '.md';

        expect(fs.existsSync(aboutPage)).toEqual(true);
    })
})
