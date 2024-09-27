const baseURL = 'nextjs-portfolio.up.railway.app'

const routes = {
    '/':        true,
    '/about':   true,
    '/blog':   true,
    '/archive':    true
}


const effects = {
    gradient: false,
    dots:     false,
    lines:    false,
}

const style = {
    theme:       'light',        // dark | light
    neutral:     'gray',         // sand | gray | slate
    brand:       'blue',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'blue',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',     // color | contrast
    solidStyle:  'flat',         // flat | plastic
    border:      'conservative', // rounded | playful | conservative
    surface:     'filled',       // filled | translucent
    transition:  'all'           // all | micro | macro
}

const display = {
    location: false,
    time:     false
}


export { routes, effects, style, display, baseURL };