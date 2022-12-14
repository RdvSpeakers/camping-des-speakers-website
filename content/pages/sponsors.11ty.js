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
    title: "Nos sponsors",
    navTitle: 'Sponsors',
    tags: 'nav',
    weight: 3,
    layout: 'layouts/sponsors/list',
    templateEngineOverride: '11ty.js',
    pagination: {
      data: 'collections.sponsor',
      size: 20,
      alias: 'sponsor',
      reverse: false,
    },
    permalink: function(data) {
      return this.url(
        `${data.site[data.locale].sponsors.url }/${data.pagination.pageNumber > 0
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
    return `
    <p><b>Le Camping des Speakers</b> est organisé bénévolement par une équipe de passionnés venant de toute la France.</p>

    <p>Afin d'organiser cette deuxième édition du Camping des Speakers, nous avons besoin de vous.</p>
    
    <a target="_blank" href="https://drive.google.com/file/d/1McXBSi-QncrBnRTVJXn0L9WqANNfNAfz/view" class="button">Consultez notre dossier de sponsoring</a>

    <p>La recherche de sponsors est ouverte, n'hésitez pas à nous contacter !</p>`
  }
