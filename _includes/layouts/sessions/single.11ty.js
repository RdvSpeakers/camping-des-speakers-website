/**
 * @file Defines the chained template for a person page
 * @author Horacio Gonzalez <horacio.gonzalez@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */


function speakerNameAndPic(data, speaker){
  if (!speaker) {
    return '';
  }
  return `<a href="${data.site.baseUrl}/${data.site[data.locale].speakers.url}/${speaker.data.key}/">
    <div class="speaker">
        <div class="speaker_pic" 
        style="background-image: url(../../img/${speaker.data.photoURL});">
        </div>
      <div class="speaker_data">
        <div class="speaker_name">${speaker.data.name}</div>
        <div class="speaker_company">${speaker.data.company?speaker.data.company:''}</div>
      </div>
    </div>
  </a>`;
}

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
    <article class="session_details">
      <h2>${data.title}</h2>      
      <div>
        <div class="when">${data.time} - ${data.duration}</div>
        <div class="where">${data.site[data.locale].rooms[data.room].name}</div>
      </div>

      <div class="content">      
         ${data.content}
      </div>

      
      <div class="speakers">
      ${data.speakers
          .map((speaker) => `${speakerNameAndPic(data, 
              data.collections.speakers
              .find(person => person.data.key == speaker))}`)
          .join('')
      }
      </div>

    </article>
    `;
    
  }