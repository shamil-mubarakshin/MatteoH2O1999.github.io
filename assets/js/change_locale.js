export function showLocaleSelector() {
    document.getElementById("language-menu").classList.toggle("show");
    document.getElementById("shadow-menu").classList.toggle("show");
}

export function showActiveLocale(localeCode) {
    let ul = document.getElementById("language-menu");
    let locales = ul.getElementsByTagName("a");
    for (let index = 0; index < locales.length; index++) {
        const locale = locales[index];
        locale.classList.remove("active");
        if(locale.id == localeCode) {
            locale.classList.add("active");
        }
    }
}