const icons = require('../dist/icons.json');
const defaults = {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linejoin": "round"
}

/* =============================================================================
 * Define icon class, which will generate icons from JSON
 * ========================================================================== */


module.exports = class Icon {

    /**
     * Get necessary info about icon
     * @param  {string} name Icon name
     * @return {object}      contains name, path and attributes
     */

    constructor(name) {

        if (icons[name] == undefined) {
            console.error(`No icon with name: ${name}`);
            return null
        }

        this.name = name
        this.attr = defaults
        this.path = icons[name]
    }

    /**
     * Generate an icon's SVG
     * @return {string} SVG string
     */

    toSVG(attr) {
        if (typeof document === 'undefined') {
            throw new Error('Icon.toSVG() only works in the browser.')
        }

        attr = Object.assign({}, this.attr, attr)
        if (attr.class) attr.class += ' lunar-icons'
        else attr.class = 'lunar-icons'

        let attributes = ''
        for (let a in attr) attributes += `${a}="${attr[a]}" `

        let str = `<svg ${attributes}>${this.path}</svg>`

        let svg = new DOMParser().parseFromString(str,'image/svg+xml')
        let element = svg.querySelector('svg')

        return element
    }

    /**
     * Output path
     * @return {string} path
     */

    toString() {
        return this.path
    }
}
