import { ChangeDetectorRef, EmbeddedViewRef, Pipe, PipeTransform, ɵmarkDirty } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { skip, tap } from 'rxjs/operators';

@Pipe({ name: 'zoneLessAsync', pure: false })
export class ZoneLessAsyncPipe implements PipeTransform {
  private currentSubscription: Subscription;
  private currentObservable$: Observable<any>;
  private currentValue: any;

  constructor(private cdr: ChangeDetectorRef) {}

  transform<T>(observable$: Observable<T>): T {
    if (observable$ !== this.currentObservable$) {
      this.currentSubscription?.unsubscribe();
      this.currentObservable$ = observable$;
      this.currentSubscription = this.currentObservable$
        ?.pipe(
          tap(newValue => (this.currentValue = newValue)),
          skip(1),
        )
        .subscribe(() => ɵmarkDirty((this.cdr as EmbeddedViewRef<any>).context));
    }

    return this.currentValue;
  }
}
