import { useSyncExternalStore } from 'react';

export type Direction = 'ltr' | 'rtl';

function subscribe(): () => void {
    return () => {};
}

function getSnapshot(): Direction {
    return document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr';
}

function getServerSnapshot(): Direction {
    return 'ltr';
}

export function useDirection(): Direction {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
