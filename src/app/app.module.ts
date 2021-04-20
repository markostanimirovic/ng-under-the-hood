import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { CounterComponent } from './counter.component';
import { ZoneLessAsyncPipe } from './zone-less-async.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, CounterComponent, ZoneLessAsyncPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
