import { differenceInDays, parseISO } from 'date-fns';

export const calculatePassage = (date: string) => `${differenceInDays(new Date(), parseISO(date))}日`;
