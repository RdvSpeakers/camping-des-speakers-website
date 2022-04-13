/**
 * @file Defines the chained template for a sponsor page
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
   * The content of the person page template
   * @method
   * @name render()
   * @param {Object} data 11ty’s data object
   * @return {String} The rendered template
   * @see {@link https://www.11ty.dev/docs/pagination/ Pagination in 11ty}
   */
  export function render(data) {
    return `
    <article class="sponsor_details">
      <div class="logo">
        <img class="sponsor_logo" src="${this.url(`/img/${data.logoURL}`)}">
      </div>
      <div class="sponsor_data">
        <h1>${data.title}</h1>
        <h2>${data.url}</h2>
      </div>
    </article>`;
  
  }