/**
 * @file Defines a shortcode for inserting variable data into the CSS `:root`
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @author Horacio Gonzalez <horacio.gonzalez@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for defining CSS `:root` custom properties
 * @module _includes/shortcodes/cssRoot
 * @param {Object} eleventyConfig 11ty’s Config API
 */
export default eleventyConfig =>

  /**
   * CSS `:root` custom properties
   * @method
   * @name cssRoot
   * @param {Object} data 11ty’s data object
   * @return {String} The rendered shortcode
   * @example `${this.cssRoot(data)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode('cssRoot', data =>
    `:root {
      /* Color Codes */
      --black: ${data.colors.grayscale[900].hex};
      --grayscale-100: ${data.colors.grayscale[100].hex};
      --grayscale-200: ${data.colors.grayscale[200].hex};
      --grayscale-400: ${data.colors.grayscale[400].hex};
      --grayscale-600: ${data.colors.grayscale[600].hex};
      --grayscale-700: #444;
      --grayscale-800: ${data.colors.grayscale[800].hex};
      --white: ${data.colors.grayscale.white.hex};
      --redish: #800000;
      /* Spaces */
      --space-1: .125rem;
      --space-2: .25rem;
      --space-3: .5rem;
      --space-4: 1rem;
      /* Named Properties */
      --background-color: var(--white);
      --card-background: var(--white);
      --text-color: var(--grayscale-800);
      --gray: var(--grayscale-600);
      --border: 2px dashed var(--gray);
      --base-unit: 1em;
      --header-background-color: var(--grayscale-800);
      --header-text-color: var(--grayscale-100);
      --toolbar-height: 5rem;
      --jumbo-overlay-color: #b0e2fc;
      --jumbo-text: var(--grayscale-100);     
      --jumbo-overlay-transition: 0.5s;

    }
    @media (prefers-color-scheme: dark) {
      :root {
        --background-color: var(--grayscale-800);
        --gray: var(--grayscale-400);
        --text-color: var(--grayscale-100);
        --redish: indianred;
        --card-background: var(--grayscale-700);
      }
    }`)
