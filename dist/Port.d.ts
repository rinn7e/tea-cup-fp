import { Sub } from './Sub';
export declare class Port<T> {
    private subs;
    send(t: T, flushSync?: boolean): void;
    subscribe<M>(f: (t: T) => M): Sub<M>;
}
