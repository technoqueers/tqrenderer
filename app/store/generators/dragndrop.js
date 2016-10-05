import { fileDropped } from '../../actions/dragndrop';

export default function(store) {
  document.addEventListener('dragover', function(event) {
    event.preventDefault();
    return false;
  }, false);

  document.addEventListener('drop', function(event) {
    event.preventDefault();
    store.dispatch(fileDropped(event.dataTransfer.files[0]));
    return false;
  }, false);
}
