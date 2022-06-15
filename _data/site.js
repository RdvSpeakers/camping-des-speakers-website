/**
 * @file Contains global data for configuring the site
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @author Horacio Gonzalez <horacio.gonzalez@gmail.com>
 */

// Edit the values for the properties in this file to fit your site.
// You can add as many new properties as you want,
// but you shouldn’t remove any of the ones already included here
// without also editing the files where those properties are used.
// Otherwise, the site will probably break.

/**
 * Global site data module
 * @module _data/site
 * @see {@link https://www.11ty.dev/docs/data-global/ Global data files in 11ty}
 */
export default {
  // The root for the site domain (without a trailing slash)
  baseUrl: 'https://camping-speakers.fr',
  pathPrefix: '',
  // Uses this locale when one is not set in content/content.11tydata.js
  defaultLocale: 'fr',
  // Localized strings and other options for Spanish (es)
  // To add a language, copy this object, then change the values
  logo: {
    url: 'img/logos/logo_color_text.png'
  },
  fr: {
    title: 'Le Camping des Speakers',
    // French as used in France
    locale: 'fr',
    // The subtitle, slogan, or catchphrase for your site,
    // used in _includes/shortcodes/site-header
    tagline: "Conférence de Devs dans le Golfe du Morbihan",
    when: "9-10 Juin 2022",
    where: {
      address: "52 Rue Mané er Groez, 56870 Baden",
      link: "https://www.google.com/maps/place/52%20Rue%20Man%C3%A9%20er%20Groez%2C%2056870%20Baden%2C%20France"
    },
    // Punctuation between a title and subtitle,
    // used in _includes/shortcodes/title-tag
    separator: ' - ',
    // The link text for skip-to-content lins, used by screen readers
    skipToContent: 'Aller au contenu',
    // The link text to invite users to edit a page in the project Git repository
    // Link path stored in package.json
    editThisPage: '📝 Éditer la page',
    // The paged navigation for larger archives of content
    // used in _includes/shortcodes/pagination-nav
    pagination: {
      // The aria-label for a pagination navigation
      navLabel: 'Pagination',
      // The aria-label for pages within a pagination navigation
      pageLabel: 'Page',
      // The link text for the first page within a pagination navigation
      first: '1',
      // The aria-label for the first page within a pagination navigation
      firstLabel: '1',
      // The link text for the previous page within a pagination navigation
      previous: 'Précédente',
      // The link text for the next page within a pagination navigation
      next: 'Suivante',
      // The link text for the last page within a pagination navigation
      last: 'Dernière',
      // The aria-label for the last page within a pagination navigation
      lastLabel: 'Dernière page'
    },
    sessions: {
      url: 'sessions',
    },
    speakers: {
      url: 'speakers',
    },
    sponsors: {
      url: 'sponsors',
    },
    team: {
      url: 'team',
    },
    guests: {
      url: 'guests',
    },
    rex: {
      url: 'rex',
    },
    /*
     * Options for displaying dates in this locale
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString `toLocaleDateString()` on MDN}
     */
    dateOptions: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    },
    // Options for navigation elements
    nav: {
      // The `aria-label` to apply to the primary navigation
      primary: 'primary navigation'
    },
    days: [{
        long: 'Jeudi, 9 juin 2022',
        short: '2022/06/09'
      },
      {
        long: 'Vendredi, 10 juin 2022',
        short: '2022/06/10'
      }
    ],
    rooms: {
      grande_salle: { id: 0, name: 'Grande Salle' },
      petite_salle: { id: 1, name: 'Petite Salle' },
      slideless: { id: 2, name: 'Extérieur' },
      autour_du_feu: { id: 3, name: 'Autour du Feu' },
    }
  },
}