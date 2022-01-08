import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppModule } from './app.module';

export const APP_TESTBED_MODULE = {
  imports: [AppModule],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    { provide: MatBottomSheetRef, useValue: {} },
  ],
};
