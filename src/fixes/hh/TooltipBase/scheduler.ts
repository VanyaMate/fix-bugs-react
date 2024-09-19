export type Callback = () => void;

class Scheduler {
    private readonly _mutates: Array<Callback>    = [];
    private readonly _calculates: Array<Callback> = [];
    private readonly _afterAll: Array<Callback>   = [];
    private _scheduled: boolean                   = false;

    public mutate (callback: Callback): void {
        this._mutates.push(callback);
        this._schedule();
    }

    public calculate (callback: Callback): void {
        this._calculates.push(callback);
        this._schedule();
    }

    public afterAll (callback: Callback): void {
        this._afterAll.push(callback);
        this._schedule();
    }

    private _schedule () {
        if (!this._scheduled) {
            this._scheduled = true;
            requestAnimationFrame(() => {
                /**
                 * Так же вызовы cb нужно обернуть в try/catch. Ведь если
                 * один cb сломался -> сломается всё.
                 */
                let cb: Callback | undefined;
                while (cb = this._mutates.pop()) cb();
                while (cb = this._calculates.pop()) cb();
                while (cb = this._afterAll.pop()) cb();
            });
        }
    }
}

export const scheduler = new Scheduler();