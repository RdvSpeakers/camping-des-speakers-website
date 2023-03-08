import * as util from 'util' // has no default export

/**
 * @file Defines a shortcode for displaying an archive of content
 * @author Horacio Gonzalez <horacio.gonzalez@gmail.com>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for a `section` of `article`s
 * @module _includes/shortcodes/archive
 * @param {Object} eleventyConfig 11ty’s Config API
 */
export default eleventyConfig =>

  /**
   * The team
   * @method
   * @name archive
   * @param {Object} data 11ty’s data object
   * @param {Array} arr The 11ty content objects to list
   * @return {String} The rendered shortcode
   * @example `${this.archive(data, data.pagination.items)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */


  eleventyConfig.addShortcode('sponsors', function(data, arr) {

      var l10n = data.site[data.locale]
      return `
    
      ${arr.filter(item => item.data.category == 4096).length > 0 ? 
        `<div class="sponsor-category">
          <img src="/img/sponsor_4096.png" alt="Sponsor 4096" width="150"> <h2>Sponsors 4096</h2>
        </div>
        <section class="grid gap 4096">
          ${arr
          .filter(item => item.data.category == 4096)
          .map(item =>
            `<article class="sponsor card">
              <div class="card_content">
                <div class="card_header">
                  <h2 class="no-margin">
                    <a href="${this.url(item.data.url)}">${item.data.title}</a>
                  </h2>
                </div>
                <div class="filler">  
                  <div class="center"><a href="${this.url(item.data.url)}">
                    <img src="/img/${this.url(item.data.logoURL)}" />
                  </a></div>
                </div>
              </div>
            </article>`)
          .join('\n')}   
        </section>` 
      : ''}
      ${arr.filter(item => item.data.category == 2048).length > 0 ? 
        `<div class="sponsor-category">
          <img src="/img/sponsor_2048.png" alt="Sponsor 2048" width="150"> <h2>Sponsors 2048</h2>
        </div>
        <section class="grid gap 2048">
          ${arr
          .filter(item => item.data.category == 2048)
          .map(item =>
            `<article class="sponsor card">
              <div class="card_content">
                <div class="card_header">
                  <h2 class="no-margin">
                    <a href="${this.url(item.data.url)}">${item.data.title}</a>
                  </h2>
                </div>  
                <div class="filler">  
                  <div class="center"><a href="${this.url(item.data.url)}">
                    <img src="/img/${this.url(item.data.logoURL)}" />
                  </a></div>
                </div>
              </div>
            </article>`)
          .join('\n')}   
        </section>` 
      : ''}
      ${arr.filter(item => item.data.category == 1024).length > 0 ? 
        `<div class="sponsor-category"><h1>Sponsors 1024</h1></div>
        <section class="grid gap 1024">
          ${arr
          .filter(item => item.data.category == 1024)
          .map(item =>
            `<article class="sponsor card">
              <div class="card_content">
                <div class="card_header">
                  <h2 class="no-margin">
                    <a href="${this.url(item.data.url)}">${item.data.title}</a>
                  </h2>
                </div>  
                <div class="filler">  
                  <div class="center"><a href="${this.url(item.data.url)}">
                    <img src="/img/${this.url(item.data.logoURL)}" />
                  </a></div>
                </div>
              </div>
            </article>`)
          .join('\n')}   
        </section>`
      : ''}
      ${arr.filter(item => item.data.category == 512).length > 0 ? 
        `<div class="sponsor-category">
          <img src="/img/sponsor_512.png" alt="Sponsor 512" width="150"> <h2>Sponsors 512</h2>
        </div>
        <section class="grid gap 512">
          ${arr
          .filter(item => item.data.category == 512)
          .map(item =>
            `<article class="sponsor card">
              <div class="card_content">
                <div class="card_header">
                  <h2 class="no-margin">
                    <a href="${this.url(item.data.url)}">${item.data.title}</a>
                  </h2>
                </div>  
                <div class="filler">  
                  <div class="center"><a href="${this.url(item.data.url)}">
                    <img src="/img/${this.url(item.data.logoURL)}" />
                  </a></div>
                </div>
              </div>
            </article>`)
          .join('\n')}   
        </section>`
      : ''}
      ${arr.filter(item => item.data.category == 'communities').length > 0 ? 
        `<div class="sponsor-category"><h1>Communautés</h1></div>
        <section class="grid gap communities">
          ${arr
          .filter(item => item.data.category == 'communities')
          .map(item =>
            `<article class="sponsor card">
              <div class="card_content">
                <div class="card_header">
                  <h2 class="no-margin">
                    <a href="${this.url(item.data.url)}">${item.data.title}</a>
                  </h2>
                </div>  
                <div class="filler"> 
                  <div class="center"><a href="${this.url(item.data.url)}">
                    <img src="/img/${this.url(item.data.logoURL)}" />
                  </a></div>
                </div>
              </div>
            </article>`)
          .join('\n')}   
        </section>`
      : ''}`
 })