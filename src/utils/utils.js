import moment from 'moment';

export function getTimeFromNow(date, withSuffix = false) {
    return moment(date).fromNow(withSuffix);
}