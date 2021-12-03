/**
 * @file Defines a shortcode for displaying information about an author
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for the content author information
 * @module _includes/shortcodes/author
 * @param {Object} eleventyConfig 11ty’s Config API
 */
export default (eleventyConfig) =>
  /**
   * Content author markup
   * @method
   * @name author
   * @param {Object} 11ty’s data object
   * @return {String} The rendered shortcode
   * @example `${this.author(data)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode(
    "jumbo",
    (data) => {       
      let l10n = data.site[data.locale]
      return `
      <div class="jumbo">
        <div class="jumbo-cover"></div>
        <div class="jumbo-overlay"></div>
        <div class="inner-wrapper">
          <img class="jumbo-logo" 
              src="img/logos/logo.png" 
              alt="logo Le Camping des Speakers">
          <div class="inner">
          </div>
        </div>
        <!--
        <div class="scroll-down" aria-hidden="true">
          <svg class="icon icon-scroll-down" id="scroll-down" viewBox="0 0 25.166666 37.8704414">
            <path fill="none" stroke="currentColor" stroke-width="2.5" stroke-miterlimit="10" d="M12.5833445 36.6204414h-0.0000229C6.3499947 36.6204414 1.25 31.5204487 1.25 25.2871208V12.5833216C1.25 6.3499947 6.3499951 1.25 12.5833216 1.25h0.0000229c6.2333269 0 11.3333216 5.0999947 11.3333216 11.3333216v12.7037992C23.916666 31.5204487 18.8166714 36.6204414 12.5833445 36.6204414z"></path>
            <path style="animation: scrollDownMove .8s ease-in-out alternate infinite;" fill="currentColor" d="M13.0833359 19.2157116h-0.9192753c-1.0999985 0-1.9999971-0.8999996-1.9999971-1.9999981v-5.428606c0-1.0999994 0.8999987-1.9999981 1.9999971-1.9999981h0.9192753c1.0999985 0 1.9999981 0.8999987 1.9999981 1.9999981v5.428606C15.083334 18.315712 14.1833344 19.2157116 13.0833359 19.2157116z"></path>
          </svg>
        </div>
        -->
      </div>
      `;
    }
  );
