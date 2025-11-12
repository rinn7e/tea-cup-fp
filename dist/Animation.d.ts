import { Sub } from './Sub';
export declare function onAnimationFrame<M>(mapper: (t: number) => M, flushSync?: boolean): Sub<M>;
