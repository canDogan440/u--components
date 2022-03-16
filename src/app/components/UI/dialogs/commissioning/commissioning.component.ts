import { EventEmitter, Output ,Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'commissioning',
  templateUrl: './commissioning.component.html',
  styleUrls: ['./commissioning.component.css']
})
export class CommissioningComponent implements OnInit {

  @Input() message: string | undefined;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

    

  constructor() { }

  ngOnInit(): void {
  }

}
