import {NgModule} from "@angular/core";
import {MatButtonModule} from  '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from  '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';



const materialComponents = [
 MatButtonModule,
 MatProgressSpinnerModule,
 MatTabsModule,
 MatListModule,
 MatIconModule,
 MatCardModule,
 MatSidenavModule,
 MatSelectModule,
 MatFormFieldModule,
 MatTooltipModule,
]

@NgModule({
 imports: [materialComponents],
 exports: [materialComponents]
 
})





export class MaterialModule { }