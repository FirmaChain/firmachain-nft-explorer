import moment from 'moment';
import { COLLECTION_LIST } from '../config';

export const createTextEllipsis = (value: string | undefined, startPoint: number, endPoint: number) => {
  if (value === undefined) return '';
  let length = value.length;
  if (length > 12)
    return value.substring(0, startPoint) + '...' + value.substring(value.length - endPoint, value.length);
  return value;
};

export const convertFromNow = (date: string | undefined) => {
  if (date === undefined || date === '') return '';
  return moment.utc(date).fromNow();
};

export const convertDateFormat = (date: string | undefined) => {
  if (date === undefined || date === '') return '';

  return moment.utc(date).format('YY/MM/DD');
};

export const getCollectionName = (dappId: string | undefined): string => {
  if (dappId === undefined) return '';

  for (let collection of COLLECTION_LIST) {
    if (collection.dappId === dappId) return collection.name;
  }

  return '';
};

export const copyToClipboard = (textToCopy: string) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(textToCopy);
    } else {
      let textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      textArea.style.position = 'absolute';
      textArea.style.opacity = '0';

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      return new Promise((res: any, rej: any) => {
        document.execCommand('copy') ? res() : rej();
        textArea.remove();
      });
    }
  } catch (e) {}
};

export const createTextEllipsisForEnd = (value: string, endPoint: number) => {
  let length = value.length;
  if (length > endPoint) return value.substring(0, endPoint) + '...';
  return value;
};

export const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const shuffleArray = (array: Array<any>) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const convertTime = (time: string) => {
  if (time === undefined) return '';

  const date = getLocalDate(time);
  const GMT = getGMT();

  return moment(new Date(date)).format('YYYY-MM-DD HH:mm:ss') + ` (${GMT})`;
};

export const getGMT = () => {
  let date = new Date();
  const offset = date.getTimezoneOffset();
  const GMT = offset / 60 < 0 ? '+' + Math.abs(offset / 60) : (offset / 60) * -1;

  return 'GMT' + GMT;
};

export const getLocalDate = (time: string) => {
  let date = new Date(time);
  const offset = date.getTimezoneOffset();
  date.setHours(date.getHours() - offset / 560);
  return date;
};
