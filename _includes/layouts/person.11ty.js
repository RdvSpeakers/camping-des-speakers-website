/**
 * @file Defines the chained template for a person page
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
var util = require('util')
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
    <article class="person_details">
      <div class="photo">
        <img class="team_member" src="${this.url(`/img/${data.photoURL}`)}">
      </div>
      <div class="person_data">
        <h1>${data.name}</h1>
        <h2>${data.company}</h2>
      </div>
      <div class="content">
        ${data.content}
      </div>
      ${data.socials ? `  
        <div class="socials">
          ${data.socials.map((social) => {
            return this.socialIcons(social);
          }).join(' ')}
        </div>` : ''
      }
    </article>
  `;

}