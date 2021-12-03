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
  eleventyConfig.addShortcode('team', function (data, arr) {

    var l10n = data.site[data.locale]
    return `<section class="grid gap">
    ${arr.map(item =>
      `<article class="card team" style="${(item.data.highlight !== undefined && item.data.highlight === true)
        ? 'padding:var(--base-unit);border:var(--border);' : ''}">
        <div class="card_content">
          <div class="card_header">
            <h2 class="no-margin">
              <a href="${this.url(`/${item.data.tags && item.data.tags.indexOf('guests') >= 0 ? l10n.guests.url : l10n.team.url}/${item.data.key}/`)}">
                ${item.data.name}
              </a>
            </h2>
            ${
              item.data.company  
              ? `<p class="no-margin">${item.data.company}</p>` 
              : ''
            }
          </div>
          <div class="filler">   
            <a href="${data.site.baseUrl}${item.data.tags && item.data.tags.indexOf('guests') >= 0 ? l10n.guests.url : l10n.team.url}/${item.data.key}/"> 
              <img class="team_member" src="${this.url(`/img/${item.data.photoURL}`)}">
            </a>
          </div>
          ${item.data.socials ? `  
            <div class="socials">
              ${item.data.socials.map((social) => {
                return this.socialIcons(social);
              }).join(' ')}
            </div>` : ''
          }
        </div>
      </article>`).join('')}
    </section>`
  })
