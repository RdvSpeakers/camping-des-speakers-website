/**
 * @file Defines a menucode for displaying a navigation menu
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for a navigation menu
 * @module _includes/shortcodes/grid-nav
 * @param {Object} eleventyConfig 11ty’s Config API
 */
export default eleventyConfig =>

  /**
   * Navigation markup
   * @method
   * @name nav
   * @param {Array} collection 11ty collection to map over
   * @param {Object} page The current 11ty `page` object
   * @param {String|Array} classes CSS classes for the `nav` (optional)
   * @param {String} ariaLabel The WAI-ARIA `aria-label` to attach to the `nav` (optional)
   * @return {String} The rendered shortcode
   * @example `${this.nav(data.collections.policies, data.page)}`
   * @see {@link https://www.11ty.dev/docs/collections/ Collections in 11ty}
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   * @see {@link https://www.w3.org/TR/wai-aria/#aria-label WAI-ARIA specification for `aria-label` property}
   */
  eleventyConfig.addShortcode('nav', function(collection, page, classes, ariaLabel) {
    var classList = []
    if (classes !== undefined) {
      if (typeof classes === 'string') {
        classList.push(classes)
      }
      if (Array.isArray(classes)) {
        classList = [...classes]
      }
    }
    return typeof collection !== 'undefined' && collection.length > 0
      ? `<nav 
          ${classes ? `class="${classList.map(item => `${item}`).join(' ')}"`: '' }
          ${ariaLabel ? `aria-label="${ariaLabel}"` : ''}>
          <ul>
            <!--
            <li>
              <a href="https://conference-hall.io/public/event/HDF3RTtlPRv7WIuxthtr" target="_blank">Call For Paper</a>
            </li>
            -->
            <li>
            <a href="https://www.billetweb.fr/le-camping-des-speakers-2023" target="_blank">Billetterie</a>
            </li>
            ${collection
              .sort((a, b) => a.data.weight - b.data.weight)
              .map(item => `<li><a href="${this.url(`${item.data.url ? item.data.url : item.url}`)}" 
                ${page.url === item.url ? 'aria-current="page"' : ''}>${item.data.navTitle
                  ? item.data.navTitle
                  : item.data.title
                }</a></li>`
              ).join('\n')}
          </ul>
        </nav>`
      : ''
  })


