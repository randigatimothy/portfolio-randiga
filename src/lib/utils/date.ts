import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

const defaultFormat = 'ddd Do MMM YYYY';

export function formatDate(value: string | Date) {
	return dayjs(value).format(defaultFormat);
}
