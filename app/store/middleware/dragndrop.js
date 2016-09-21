import fs from 'fs';

import {
  FILE_DROPPED,
  fileContentsReadSuccess,
  fileContentsReadFail
} from '../../actions/dragndrop';

const dragndrop = store => next => action => {
  if (action.type === FILE_DROPPED) {
    const path = action.payload.file.path;

    fs.readFile(path, (err, contents) => {
      const resultAction = err ?
        fileContentsReadFail(err) :
        fileContentsReadSuccess(contents.toString())
      ;

      store.dispatch(resultAction);
    });

    return undefined;
  }

  return next(action);
};

export default dragndrop;
