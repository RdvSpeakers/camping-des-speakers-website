/**
 * @file Defines a shortcode for displaying an archive of content
 * @author Horacio Gonzalez <horacio.gonzalez@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for a `section` of `article`s
 * @module _includes/shortcodes/archive
 * @param {Object} eleventyConfig 11ty’s Config API
 */
 export default eleventyConfig =>

 /**
  * The team
  * @method
  * @name archive
  * @param {Object} data 11ty’s data object
  * @param {Array} arr The 11ty content objects to list
  * @return {String} The rendered shortcode
  * @example `${this.archive(data, data.pagination.items)}`
  * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
  */
 eleventyConfig.addShortcode('sponsors', function (data, arr) {

    var l10n = data.site[data.locale]
    return `<section class="grid gap 4096">
        <div id="partner-category-4096" class="partner-category">
        </div>
        ${arr
        .filter(item => item.category == 4096)
        .map(item =>
        ``).join('\n')}    
    </section>
    <section class="grid gap 2048">
    </section>
    <section class="grid gap 1024">
    </section>
    <section class="grid gap 512">
    </section>
    <section class="grid gap community">
    </section>`
 })
