import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Vimeo(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

function onTimeUpdate(event) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(event.seconds));
  console.log(event.seconds);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

const currentTime = localStorage.getItem(STORAGE_KEY);

if (currentTime) {
  player
    .setCurrentTime(currentTime)
    .then(function (seconds) {
      console.log(seconds);
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    }),
    console.log(STORAGE_KEY);
}
