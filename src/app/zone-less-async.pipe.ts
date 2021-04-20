import {
  ChangeDetectorRef,
  EmbeddedViewRef,
  OnDestroy,
  Pipe,
  PipeTransform,
  ɵmarkDirty,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, switchAll, takeUntil, tap } from 'rxjs/operators';

@Pipe({ name: 'zoneLessAsync', pure: false })
export class ZoneLessAsyncPipe implements PipeTransform, OnDestroy {
  private readonly destroy = new Subject();
  private readonly latestObservable = new Subject<Observable<any>>();
  private latestValue!: any;

  constructor(cdr: ChangeDetectorRef) {
    this.latestObservable
      .pipe(
        distinctUntilChanged(),
        switchAll(),
        tap(value => (this.latestValue = value)),
        tap(() => ɵmarkDirty((cdr as EmbeddedViewRef<any>).context)),
        takeUntil(this.destroy),
      )
      .subscribe();
  }

  transform<T>(observable$: Observable<T>): T {
    this.latestObservable.next(observable$);
    return this.latestValue;
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }
}
