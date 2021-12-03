// JavaScript-ified ./content/team.11ty.js
/**
 * @file Defines the chained layout for the archive page
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 * @author Horacio Gonzalez <horacio.gonzalez@gmail.com>
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
 export var data = {
  title: "L'équipe",
  navTitle: 'Équipe',
  tags: 'nav',
  weight: 3,
  layout: 'layouts/team',
  templateEngineOverride: '11ty.js',
  pagination: {
    data: 'collections.team',
    size: 20,
    alias: 'member',
    reverse: false,
  },
  permalink: function(data) {
    return this.url(
      `${data.site[data.locale].team.url }/${data.pagination.pageNumber > 0
      ? `page-${data.pagination.pageNumber}/` 
      : ''}index.html`);
  }
}

/**
 * The archive page content
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 */
export function render(data) {
  return `<!-- ${data.page.inputPath} -->`
}
