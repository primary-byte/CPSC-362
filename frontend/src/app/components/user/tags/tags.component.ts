import { Component, OnInit, Input } from '@angular/core';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() options: string[] = [ 'C', 'Python', 'Java', 'C++', 'C#', 'Visual Basic',
                                 'JavaScript', 'Assembly language', 'PHP', 'SQL', 'Ruby', 'Docker',
                                 'R', 'Groovy', 'MATLAB', 'Go', 'Delphi/Object Pascal', 'Swift',
                                 'Ada', 'PL/SQL', 'Dart', 'TypeScript', 'Bash', 'PowerShell',
                                 'AWS', 'Linux', 'Microsoft Excel', 'React.js', 'Azure', 'WordPress',
                                 'ASP.NET', 'Software Engineering', 'Artificial Intelligence', 'Machine Learning', 'MongoDB', 'Software Architecture',
                                 'Software Testing', 'Node.js', 'Jira', 'Kubernetes', 'Objective-C', 'Rust', 'Mobile Development'];
  constructor() { }

  ngOnInit(): void {
  }

  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
  }

}
