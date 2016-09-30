export const FILE_DROPPED = 'FILE_DROPPED';

export function fileDropped(file) {
  return {
    type: FILE_DROPPED,
    payload: {
      file
    }
  };
}

export const FILE_CONTENTS_READ_SUCCESS = 'FILE_CONTENTS_READ_SUCCESS';

export function fileContentsReadSuccess(file, contents) {
  return {
    type: FILE_CONTENTS_READ_SUCCESS,
    payload: {
      file,
      contents
    }
  };
}

export const FILE_CONTENTS_READ_FAIL = 'FILE_CONTENTS_READ_FAIL';

export function fileContentsReadFail(error) {
  return {
    type: FILE_CONTENTS_READ_SUCCESS,
    payload: {
      error: error
    }
  };
}
