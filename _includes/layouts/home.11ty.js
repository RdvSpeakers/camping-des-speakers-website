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
    <h1>${l10n.title}</h1>
    <h2>${l10n.tagline}</h2>
    <h3>${l10n.when}</h3>
    <a href=${l10n.where.link} target="_blank" >${l10n.where.address}</a>

    <p></p>

    <h2>Vous souhaitez être sponsor ?</h2>
    <a target="_blank" href="https://drive.google.com/file/d/1McXBSi-QncrBnRTVJXn0L9WqANNfNAfz/view" class="button">Consultez notre dossier de sponsoring</a>

    <!--
    <h2>La billeterie est ouverte !</h2>
    <a href="https://www.billetweb.fr/le-camping-des-speakers" class="button">J'achète mon billet</a>
    -->

    <p></p>
    <!--
    <h2>Vous hésitez ! Découvrez le programme !</h2>
    <a href="${data.site[data.locale].sessions.url}" class="button">Le programme</a>
    -->
    </div>



  `
}