import moment from 'moment';

export function getTimeFromNow(date, justTime = true, withoutSuffix = false) {
    return (moment().diff(moment(date), 'years') < 1 || justTime) ? moment(date).fromNow(withoutSuffix) : moment(date).format('MMM DD, YYYY');
}