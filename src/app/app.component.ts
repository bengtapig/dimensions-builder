import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, Event, NavigationEnd } from '@angular/router';
declare let ga:Function;

import { TopNavComponent } from './shared';
import { DataService } from './data';
import { MetaService } from './meta';
import { ShareSectionComponent, CommentSectionComponent } from './components';

@Component({
	moduleId: module.id,
	selector: 'dimensions-builder',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [ROUTER_DIRECTIVES, TopNavComponent, ShareSectionComponent, CommentSectionComponent],
	providers: [DataService, MetaService]
})
export class AppComponent {
	private sub: any;

	constructor(public router: Router, 
				private dataService: DataService,
				private meta: MetaService) {
	}

	ngOnInit() {
        this.sub = this.router.events.subscribe(
            (event:Event) => {
                if (event instanceof NavigationEnd && typeof ga === "function") {
					ga('send', 'pageview', event.urlAfterRedirects);
                }
            });
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
