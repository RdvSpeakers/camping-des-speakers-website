/**
 * @file Contains data common to all pages, to reduce repetition
 * @author Stéphanie Moallic <stephanie.moallic@gmail.com>
 */

/**
 * Directory data module for sponsors
 * @module content/sponsor
 * @see {@link https://www.11ty.dev/docs/data-template-dir/ Template and directory data files in 11ty}
 * @see {@link  https://www.11ty.dev/docs/permalinks/ Permalinks in 11ty}
 */
export default {
  layout: 'layouts/sponsors/single',
  // Note: The permalink value uses Nunjucks/Liquid syntax;
  // a future version of 11ty may allow for JavaScript template literals
  eleventyComputed: {
    permalink: data => `/sponsors/${data.page.fileSlug}/index.html`
  },
  tags: [
    'sponsor'
  ]
}