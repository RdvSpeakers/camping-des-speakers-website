/**
 * @file Defines the chained template for the team page
 * @author Horacio Gonzalez <horacio.gonzalez@gmail.com>
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

function speakerNameAndPic(data, speaker){
    return `
    <li class="speaker">
        <div class="speaker_pic" 
        style="background-image: url(${data.site.baseUrl}/img/${speaker.data.photoURL});">
        </div>
      <div class="speaker_data">
        <div class="speaker_name">${speaker.data.name}</div>
        <div class="speaker_company">${speaker.data.company?speaker.data.company:''}</div>
      </div>
    </li>`;
}

function sessionsByDay(data, sessions) {
    let sessionsByDay = [];

    for (let i=0; i<sessions.length; i++) {
        let session = sessions[i];
        if (!sessionsByDay[session.data.day]) {
            sessionsByDay[session.data.day] = [];
        } 
        sessionsByDay[session.data.day].push(session);
    };
    console.log('sessionsByDay', sessionsByDay[0].length)
    return sessionsByDay;
}

function sessionGrid(data, sessions) {

    return `
    <h3>${data.site[data.locale].days[sessions[0].data.day].long}</h3>

    <section class="grid gap sessions_day">
    ${sessions.map(item =>
      `<article class="card session">
        <div class="card_content">
          <div class="card_header">
            <h4 class="no-margin">
              <a href="${data.site.baseUrl}/${data.site[data.locale].sessions.url }/${item.data.key}/">
                ${item.data.title}
              </a>
            </h4>
          </div>
          <div class="filler">   
                <ul class="speakers">
                    ${item.data.speakers
                        .map((speaker) => `${speakerNameAndPic(data, 
                            data.collections.speakers
                            .find(person => person.data.key == speaker))}`)
                        .join('')
                    }
                </ul>
          </div>
          <div>
            <div class="when">${item.data.time} - ${item.data.duration}</div>
            <div class="where">${data.site[data.locale].rooms[item.data.room]}</div>
          </div>
        </div>
      </article>`).join('')}
    </section>`
}

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
 export var data = {
    layout: 'layouts/base'
  }
  
  /**
   * The content of the template
   * @method
   * @name render()
   * @param {Object} data 11ty’s data object
   * @return {String} The rendered template
   * @see {@link https://www.11ty.dev/docs/pagination/ Pagination in 11ty}
   */
  export function render(data) {
    return `<article class="sessions-list">
      <header class="article-header">
        <h2>${data.title}</h2>
      </header>
      ${data.content}

      ${sessionsByDay(data, data.pagination.items).map((day)=> sessionGrid(data, day))}

      <footer>
        ${this.paginationNav(data)}
      </footer>
    </article>`
  }
  