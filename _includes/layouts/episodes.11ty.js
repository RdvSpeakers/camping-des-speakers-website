/**
 * @file Defines the chained template for episodes 
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
 * The content of the home page template
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/pagination/ Pagination in 11ty}
 */
export function render(data) {
  let teamMembers = 
      data.collections.team.map((item) => item.template.frontMatter.data);

  let guestList = 
      data.collections.guests.map((item) => item.template.frontMatter.data);

  let l10n = data.site[data.locale];

  return `
    <div class="episode_container">
      <article class="episode_details">
        <header class="article-header">
          <div class="episode">
            <div class="number"> 
              ${data.name}
            </div>
            <time>${this.pageDate(data)}</time>
          </div>
          <h1>${data.title}</h1>
          <h2>${data.subtitle}</h2>
        </header>
        <div class="card">
          <img src="${this.url(`/img/${data.name}/card.jpg`)}">
          ${data.references ? `
          <div class="links">
          ${data.references
            .map((ref) => {
              return `<div class="link"><p>${ref.msg}</p> ${this.socialIcons(ref)}</div>`;
            }).join('\n') }
          </div>
        ` : ''}
        </div>


        <div class="chronicles">
          <p>Au programme de l'émission</p>
          <ul>
          ${
            data.chronicles ? data.chronicles
              .map((item) => {
                return `
                  <li>
                    <h3 class="chronicle_name">
                      ${data.labels[item.key].emoji} ${data.labels[item.key].name}
                    </h3>
                    
                    ${item.title ? `<h4>${item.title}</h4>` : ''}
                    ${item.subtitle ? `<h5>${item.subtitle}</h5>` : ''}

                    ${item.guests ? 
                      `<p>Avec ${item.guests
                        .map((aGuest) =>{
                          return `<a href="${this.url(`${l10n.guests.url}/${aGuest}/`)}">${
                            guestList
                              .find((guest) => guest.key == aGuest) ?
                            guestList
                              .find((guest) => guest.key == aGuest)
                              .name.trim() : ''
                          }</a>`;
                        })
                        .join(', ').replace(/, ([^,]*)$/, ' et $1')}</p>` : '' }

                    ${item.presenters ? 
                    `<p>Présenté par ${item.presenters
                      .map((presenter) =>{
                        return `<a href="${this.url(`/${l10n.team.url}/${presenter}/`)}">${
                          teamMembers
                            .find((member) => member.key == presenter) ?
                          teamMembers
                            .find((member) => member.key == presenter)
                            .name.trim() : ''
                        }</a>`; })
                      .join(', ').replace(/, ([^,]*)$/, ' et $1')}</p>` : '' }

                  </li>
                `;
              })
              .join('\n') 
            : '' 
          }
          </ul>
        </div>
        </div>
      </article>
    </div>
  `
}
