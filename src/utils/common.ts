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
