import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import nunjucks from 'nunjucks';
import Papa from 'papaparse';

import newsletterTemplate from '../templates/newsletter.html';

import { FILE_CONTENTS_READ_SUCCESS } from '../actions/dragndrop';

const INITIAL_STATE = {
  emailData: null,
  emailHtml: null,
  error: null
};

function rendering(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  if (type === FILE_CONTENTS_READ_SUCCESS) {
    try {
      const { file, contents } = payload;

      let emailData;
      if (file.path.indexOf('.json') > -1) {
        emailData = JSON.parse(contents);
      } else {
        const rawEmailData = Papa.parse(contents, {
          header: true
        });

        const events = rawEmailData.data.map((r) => {
          return {
            name: r.Name,
            week: r.Date,
            link: r.Link,
            tags: (r.Tags || '').split(','),
            image: r['Image URL'],
            description: r['Description (HTML)']
          };
        });

        emailData = { events };
      }

      const emailHtml = nunjucks.renderString(
        newsletterTemplate,
        emailData
      );

      return {
        ...state,
        error: null,
        emailData,
        emailHtml
      };
    } catch (error) {
      return {
        ...state,
        error
      };
    }
  }

  return state;
}

const rootReducer = combineReducers({
  routing,
  rendering
});

export default rootReducer;
