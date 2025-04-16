import {
  Component,
  input,
  InputSignal,
  linkedSignal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-reaction-picker',
  imports: [],
  templateUrl: './reaction-picker.component.html',
  styleUrl: './reaction-picker.component.scss',
})
export class ReactionPickerComponent {
  public reactions: InputSignal<string[]> = input<string[]>([]);

  public selectedReaction: WritableSignal<string | null> = linkedSignal<
    string[],
    string | null
  >({
    source: () => this.reactions(),
    computation: (source, previous) => {
      return source.find((r) => previous?.value === r) || null;
    },
  });

  public isSelected(reaction: string): boolean {
    return this.selectedReaction() === reaction;
  }
}
