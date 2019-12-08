import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent {
  public form: FormGroup;
  unsubcribe: any;

  public fields: any[] = [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      value: "",
      required: true
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      value: "",
      required: true
    },
    {
      type: "text",
      name: "email",
      label: "Email",
      value: "",
      required: true
    },

    {
      type: "dropdown",
      name: "country",
      label: "Country",
      value: "in",
      required: true,
      options: [
        { key: "in", label: "India" },
        { key: "us", label: "USA" }
      ]
    },
    {
      type: "radio",
      name: "gender",
      label: "Gender",
      value: "m",
      required: true,
      options: [
        { key: "m", label: "Male" },
        { key: "f", label: "Female" }
      ]
    },
    {
      type: "checkbox",
      name: "hobby",
      label: "Hobby",
      required: true,
      options: [
        { key: "f", label: "Fishing" },
        { key: "c", label: "Cooking" }
      ]
    }
  ];

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    });

    this.unsubcribe = this.form.valueChanges.subscribe(update => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }

  onUpload(e) {
    console.log(e);
  }

  handleSubmit(f: any) {
    console.log(f);
  }
  getFields() {
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
}
