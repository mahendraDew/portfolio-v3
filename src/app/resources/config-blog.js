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
    lines:    true,
}

const style = {
    theme:       'dark',         // dark | light
    neutral:     'slate',        // sand | gray | slate
    brand:       'indigo',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'blue',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'color',        // color | contrast
    solidStyle:  'flat',         // flat | plastic
    border:      'rounded',      // rounded | playful | conservative
    surface:     'filled',       // filled | translucent
    transition:  'all'           // all | micro | macro
}

const display = {
    location: true,
    time:     true
}

const mailchimp = {
    action: 'https://url/subscribe/post?parameters',
    effects: {
        gradient: true,
        dots:     false,
        lines:    false,
    }
}

export { routes, effects, style, display, mailchimp, baseURL };