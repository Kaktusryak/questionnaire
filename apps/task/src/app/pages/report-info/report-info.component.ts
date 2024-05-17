import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Graph } from '../../interfaces/graph';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-report-info',
  standalone: true,
  imports: [HttpClientModule, CommonModule, CanvasJSAngularChartsModule],
  templateUrl: './report-info.component.html',
  styleUrl: './report-info.component.css',
})
export class ReportInfoComponent {
  constructor(private route: ActivatedRoute) {}

  router = inject(Router);
  authService = inject(AuthServiceService);
  http = inject(HttpClient);

  graph: any;
  token: string = '';
  isLoaded: boolean = false;
  params = new HttpParams();
  reportId: string | undefined = this.route.snapshot.paramMap
    .get('id')
    ?.toString();


    


  chartOptions: any;

  ngOnInit(): void {
    this.params = this.params.append('id', this.reportId ? this.reportId : '');

    this.http
      .get<Graph>(
        'https://user-assessment-api.vercel.app/api/userassessments/graph/',
        { params: this.params }
      )
      .subscribe({
        next: (res) => {
          this.graph = res;
          this.isLoaded = true;
          this.chartOptions = {
            title: {
              text: "Basic Column Chart in Angular"
            },
            data: [{
              type: this.graph.type,
              dataPoints: [
                { label: "Agreeableness",  y: this.graph.data.agreeableness  },
                { label: "Drive", y: this.graph.data.drive   },
                { label: "Luck", y: this.graph.data.luck  },
                { label: "Openness",  y: this.graph.data.openness  },
                
              ]
            }]     
          };
        },
        error: () => {},
      });
  }
}
