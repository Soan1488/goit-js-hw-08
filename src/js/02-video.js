import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);
player.on('timeupdate', throttle(timeOnPlayer, 1000));

function timeOnPlayer(e) {
    if (localStorage.getItem('videoplayer-current-time')) {
        localStorage.setItem('videoplayer-current-time', e.seconds);
    }
}

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}