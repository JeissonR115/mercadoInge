
const HEAD_ELEMENT = document.head || document.getElementsByTagName('head')[0];

export const createDefaultHead = ({
    parent = HEAD_ELEMENT,
    titleName = 'Home',
    imgFavicon = '../pictures/logo/ico/icono_oscuro.ico',
    listStyles = ['../css/styles.css'],
    listFonts = []
}) => {
    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');

    const metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

    const title = document.createElement('title');
    title.innerText = titleName;

    if (imgFavicon) {
        const favicon = document.createElement('link');
        favicon.setAttribute('rel', 'icon');
        favicon.setAttribute('type', 'image/x-icon');
        favicon.setAttribute('href', imgFavicon);
        parent.appendChild(favicon);
    }

    listStyles.forEach(style => {
        const linkStylesheet = document.createElement('link');
        linkStylesheet.setAttribute('rel', 'stylesheet');
        linkStylesheet.setAttribute('href', style);
        parent.appendChild(linkStylesheet);
    });

    listFonts.forEach(font => {
        const linkFont = document.createElement('link');
        linkFont.setAttribute('rel', 'stylesheet');
        linkFont.setAttribute('href', font);
        parent.appendChild(linkFont);
    });

    parent.appendChild(metaCharset);
    parent.appendChild(metaViewport);
    parent.appendChild(title);
};

