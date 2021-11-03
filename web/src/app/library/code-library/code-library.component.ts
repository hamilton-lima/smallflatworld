import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfirmOptions, ConfirmService } from 'src/app/shared/confirm.service';
import { SceneCode } from '../../../../../server/src/events.model';
import { CodeLibraryService } from '../code-library.service';

@Component({
  selector: 'app-code-library',
  templateUrl: './code-library.component.html',
  styleUrls: ['./code-library.component.scss'],
})
export class CodeLibraryComponent implements OnInit {
  codes: BehaviorSubject<SceneCode[]>;
  columns: string[] = ['play', 'name', 'delete'];

  constructor(
    private service: CodeLibraryService,
    private confirm: ConfirmService
  ) {
    this.codes = new BehaviorSubject<SceneCode[]>([]);
  }

  ngOnInit(): void {
    this.service.onUpdate.subscribe((codes) => {
      this.codes.next(codes);
    });
  }

  add() {
    const code = this.service.buildCode();
    this.service.add(code);
  }

  async delete(name: string) {
    const response = await this.confirm.confirm([
      'Do you want to remove this CODE?',
      'There is no going back from here...',
    ]);

    if (response == ConfirmOptions.YES) {
      await this.service.remove(name);
    }
  }

  execute(code: SceneCode) {
    this.service.execute(code);
  }
}
