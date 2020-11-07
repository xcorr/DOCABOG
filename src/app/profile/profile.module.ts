import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
