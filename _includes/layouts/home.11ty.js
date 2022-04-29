/**
 * @file Defines the chained template for home page
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @author Horacio Gonzalez <horacio.gonzalez@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
export var data = {
  layout: 'layouts/base'
}

/**
 * The content of the home page template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/pagination/ Pagination in 11ty}
 */
export function render(data) {

  let l10n = data.site[data.locale];
  return `
    ${this.jumbo(data)}

    <div class="nextEpisode">   
    <h2>${l10n.tagline}</h2>
    <h3>${l10n.when}</h3>
    <a href=${l10n.where.link}>${l10n.where.address}</a>
    </div>

  `
}