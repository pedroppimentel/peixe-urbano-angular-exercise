import { PipeTransform, Pipe } from '@angular/core';

// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({
    name: 'reducedDesc'
})
export class ReducedDescription {
    transform(txt: string, lengthLimit: number): string {
        if (txt.length > lengthLimit) {
            return txt.substr(0, lengthLimit) + '... ';
        }
        return txt;
    }
}
