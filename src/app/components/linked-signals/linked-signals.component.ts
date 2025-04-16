import { Component, signal, WritableSignal } from '@angular/core';
import { ReactionPickerComponent } from '../reaction-picker/reaction-picker.component';

@Component({
  selector: 'app-linked-signals',
  imports: [ReactionPickerComponent],
  templateUrl: './linked-signals.component.html',
  styleUrl: './linked-signals.component.scss',
})
export default class LinkedSignalsComponent {
  public reactions: WritableSignal<string[]> = signal<string[]>([
    '😠',
    '😐',
    '😊',
  ]);
}
