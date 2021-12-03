/**
 * @file Defines a shortcode for displaying an archive of content
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for a `section` of `article`s
 * @module _includes/shortcodes/archive
 * @param {Object} eleventyConfig 11ty’s Config API
 */
export default eleventyConfig =>

  /**
   * A section of articles
   * @method
   * @name archive
   * @param {Object} data 11ty’s data object
   * @param {Array} arr The 11ty content objects to list
   * @return {String} The rendered shortcode
   * @example `${this.archive(data, data.pagination.items)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode('archive', function (data, arr) {
    var l10n = data.site[data.locale]
    return `<section class="grid gap">
    ${arr.map(item =>
      `<article class="card" style="${(item.data.highlight !== undefined && item.data.highlight === true)
        ? 'padding:var(--base-unit);border:var(--border);' : ''}">
        <div class="card_content">
          <div class="card_header">
            <div class="episode">
              <div class="number"> 
                ${item.data.name}
              </div>
              <time>${this.pageDate(item.data)}</time>
            </div>
            <h2 class="no-margin">
              <a href="${this.url(`${item.data.page.url}`)}"> 
                 ${item.data.title}
              </a>
            </h2>
            <p class="no-margin">${item.data.subtitle}</p>
          </div>
          <div class="filler">          
            <a href="${this.url(`${item.data.page.url}`)}"> 
              <img src="${this.url(`/img/${item.data.name}/card-thumb.jpg`)}">
            </a>
          </div>
        </div>
      </article>`).join('')}
    </section>`
  })
