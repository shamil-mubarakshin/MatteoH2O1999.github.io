export function showLocaleSelector(to) {
    if (to === undefined) {
        document.getElementById("language-menu").classList.toggle("show");
        document.getElementById("shadow-menu").classList.toggle("show");
    } else {
        if (to) {
            document.getElementById("language-menu").classList.add("show");
            document.getElementById("shadow-menu").classList.add("show");
        } else {
            document.getElementById("language-menu").classList.remove("show");
            document.getElementById("shadow-menu").classList.remove("show");
        }
    }
}

export function showActiveLocale(localeCode) {
    let ul = document.getElementById("language-menu");
    let locales = ul.getElementsByTagName("button");
    for (let index = 0; index < locales.length; index++) {
        const locale = locales[index];
        locale.classList.remove("active");
        if(locale.id == localeCode) {
            locale.classList.add("active");
        }
    }
}