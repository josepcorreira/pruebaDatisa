import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NeoObject, ResponseApi } from 'src/app/models/modelsNeo';
import { ApiNasaService } from 'src/app/Services/api-nasa.service';
import { DetaiNeoComponent } from '../detai-neo/detai-neo.component';
import * as moment from 'moment';
@Component({
  selector: 'app-view-neo',
  templateUrl: './view-neo.component.html',
  styleUrls: ['./view-neo.component.scss']
})
export class ViewNeoComponent implements OnInit {

  public nearObjects!: Array<NeoObject>;
  public detailNeo!: NeoObject;
  public loading: boolean = true;
  public error: boolean = false;
  public colums: string[] = ['day', 'name', 'weight', 'dangerus'];
  public form = new FormGroup({
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
  });
  constructor(private apiNasa: ApiNasaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loading = true;
    this.getNeoObjects(moment(new Date()).format("YYYY-MM-DD"), moment(new Date()).format("YYYY-MM-DD"));
  }

  async getNeoObjects(dateStart: string, dateEnd: string) {
    this.error = false;
    this.nearObjects = [];
    this.loading = true;
    this.nearObjects = (this.mapResponse(await this.apiNasa.getSpacialObjects(dateStart, dateEnd).
      then(res => {
        return res;
      }).catch(
        error => {
          this.error = true;
          this.loading = false;
        })));
  }

  private mapResponse(response: any): Array<NeoObject> {
    let result: Array<NeoObject> = [];
    let object: ResponseApi = {
      element_count: response.element_count,
      links: {
        next: response.links.next,
        prev: response.links.prev,
        self: response.links.self
      },
      near_earth_objects: response.near_earth_objects
    }
    for (let key in object.near_earth_objects) {
      object.near_earth_objects[key].forEach((element: NeoObject) => {
        result.push({
          day: key,
          absolute_magnitude_h: element.absolute_magnitude_h,
          close_approach_data: element.close_approach_data,
          estimated_diameter: element.estimated_diameter,
          id: element.id,
          is_potentially_hazardous_asteroid: element.is_potentially_hazardous_asteroid,
          is_sentry_object: element.is_sentry_object,
          links: element.links,
          name: element.name,
          nasa_jpl_url: element.nasa_jpl_url,
          neo_reference_id: element.neo_reference_id,
          orbital_data: element.orbital_data
        });
      });

    }
    this.loading = false;
    return result;
  }

  async openDialog(id: string) {
    this.error = false;
    await this.apiNasa.getDetailObject(id).
      then(res => {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = res;
        this.dialog.open(DetaiNeoComponent, dialogConfig);
      }
      ).catch(
        error => {
          this.error = true;
          this.loading = false;
        }
      );

  }

  sendForm(form: FormGroup) {
    this.getNeoObjects(this.formatDate(form.value.start), this.formatDate(form.value.end))
  }

  formatDate(date: String) {
    let dateFormat = new Date(date.toString()).toISOString();
    return moment(dateFormat).format("YYYY-MM-DD");
  }

}