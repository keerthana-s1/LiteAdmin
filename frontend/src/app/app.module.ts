import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule } from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';




import {AuthInterceptorService } from './authinterceptor.service'
import { AppRoutingModule } from './app-routing.module';
import {UpdateComponent} from './update.component'
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import {AuthService} from './auth.service'
import {RegisterComponent} from './register.component'
import {LoginComponent} from './login.components'
import {NewDBComponent} from './newbm.component'
import {ListComponent} from './list.component'
import {TableComponent} from './table.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import { ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { from } from 'rxjs';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent, RegisterComponent,LoginComponent,
    NewDBComponent,ListComponent,UpdateComponent,TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatExpansionModule,
    ClipboardModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatGridListModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  
  providers: [ApiService,AuthService, {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
