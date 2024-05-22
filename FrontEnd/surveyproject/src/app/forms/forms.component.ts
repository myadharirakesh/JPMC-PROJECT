import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { FormService } from '../services/forms.service';

interface Question {
  questionNumber: number;
  questionText: string;
  options: string[];
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  file: File | undefined;
  // formFields: string[] = [];
  // shareLink: string | null = null;
  questions: Question[] = [];
  formData: any = {};
  msg: any;

  constructor(private service: FormService) {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    if (!this.file) {
      console.error('No file selected');
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const data = fileReader.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[];
      // if (jsonData.length > 0) {
      //   this.formFields = Object.keys(jsonData[0]);
      //   this.saveFormStructure();
      // }
      
      this.questions = jsonData.map((row, index) => ({
        questionNumber: index + 1, // Assuming the question number is based on row index
        questionText: row[0], // The first column is the question text
        options: row.slice(1, 5) // The next four columns are the options
      }));

      // Initialize formData with empty values
      this.formData = this.questions.map(() => '');
    };
    fileReader.readAsBinaryString(this.file);
  }

  editAllQuestions() {
    // Function to handle the edit action, currently it does nothing but you can add functionality if needed
    console.log('Editing all questions');
  }

  


  // saveFormStructure() {
  //   this.service.saveFormStructure(this.formFields).subscribe((res: any) => {
  //     this.shareLink = res.shareableLink;
  //     console.log('Shareable link:', this.shareLink);
  //   });
  // }

  // generateShareLink() {
  //   if (this.formFields.length > 0) {
  //     this.saveFormStructure();
  //   } else {
  //     console.error('No form structure to share');
  //   }
  // }

  // copyToClipboard(text: string) {
  //   navigator.clipboard.writeText(text).then(() => {
  //     alert('Link copied to clipboard!');
  //   }).catch(err => {
  //     console.error('Failed to copy text:', err);
  //   });
  // }





  submitForm() {
    console.log(this.formData);
    // Handle form submission here
    this.service.saveFormData(this.formData).subscribe((res) => {
      this.msg = res;
      alert(this.msg);
    });
  }
}
