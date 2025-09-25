import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { ContactList } from '../contact-list/contact-list';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [ContactList],
    template: `

<div class="container-fluid">
    <div class="row">
        <!-- Sidebar -->
        <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse p-3">
        <h6 class="sidebar-heading mb-2">Saved reports</h6>
        <ul class="nav flex-column mb-3">
            <li class="nav-item"><a class="nav-link active" href="#">Current month</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Last quarter</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Social engagement</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Year-end sale</a></li>
        </ul>
        <hr>
        <ul class="nav flex-column">
            <li class="nav-item"><a class="nav-link" href="#">Settings</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Sign out</a></li>
        </ul>
        </nav>

    <!-- Main -->
        <main class="col-md-9 ms-sm-auto col-lg-10 px-4">
        <div class="d-flex align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h4 m-0">Company name</h1>
        </div>

        <!-- Chart -->
        <div class="card mb-4">
            <div class="card-body">
            <canvas #chartEl height="80"></canvas>
            </div>
        </div>

        <!-- Tabla -->
        <h2 class="h5 mb-3">Contactos</h2>
        <app-contact-list></app-contact-list>
        </main>
    </div>
</div>
    `,

})
export class Dashboard implements AfterViewInit {
    @ViewChild('chartEl') chartEl!: ElementRef<HTMLCanvasElement>;

    ngAfterViewInit(): void {
        new Chart(this.chartEl.nativeElement, {
            type: 'line',
            data: {
                labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                datasets: [{
                    label: 'Sales',
                    data: [15000, 23000, 19000, 26000, 24000, 30000, 12000],
                    tension: 0.3,
                    fill: false,
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: false } }
            }
        });
    }
}
